/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { fetchFromApi } from 'src/helpers/dataFetcher';
import { __30DaysAgoDate } from 'src/helpers/date';
import { Language } from '../helpers/language';
@Injectable()
export class ApiService {

    async getall() {
        const dateString = __30DaysAgoDate()
        const result = await fetchFromApi('https://api.github.com', `/search/repositories?q=created:>${dateString}&sort=stars&order=desc&per_page=100`)
        return {
            //use items property only
            "languages":this.cleanData(result.items),
            "created_since": dateString
        }
    }
    //create objects from items array ,assembles all repositories under one key and leave only needed details 
    cleanData(items: { [x: string]: string; }[])
    {
        const map = {}
        items.forEach((item: { [x: string]: string; }) => {
                if (map.hasOwnProperty(item["language"])) {
                    map[item["language"]]?.addRepository(item["html_url"]);

                } else {
                    //the language attribute is null when the repo contains no code, so we have to exclude them altho they might have a lot of stars  
                    if (item["language"]) {
                        const rep = new Language();
                        rep?.addRepository(item["html_url"]);
                        map[item['language']] = rep;
                    }
                }

            });
        return map
    }
}