/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { compareRepositories } from 'src/helpers/comparer';
import { fetchFromApi } from 'src/helpers/dataFetcher';
import { __30DaysAgoDate } from 'src/helpers/date';
import { Language } from '../helpers/language';
@Injectable()
export class ApiService {

    async getAll() {
        const dateString = __30DaysAgoDate()
        const result = await fetchFromApi('https://api.github.com', `/search/repositories?q=created:>${dateString}&sort=stars&order=desc&per_page=100`)
        return {
            //use items property only
            "languages":this.sortByNumberOfRepositoriesDesc(result.items),
            "created_since": dateString
        }
    }
    //create objects from items array ,assembles all repositories under one key and leave only needed details 
    cleanData(repositories)
    {
        //maps each language with all repositories that uses it 
        return repositories.filter(repository => repository['language']).reduce((acc,cur,i)=>
        {
            const rep = acc[cur['language']] ?? new Language()
            rep?.addRepository(cur["html_url"])
            acc[cur['language']]=rep
            return acc;
        }
        , {})
       
    }
    sortByNumberOfRepositoriesDesc(repositories)
    {
        const languages = this.cleanData(repositories)
        return Object.entries(languages).sort((a,b) => compareRepositories(b, a,'numberOfRepositories')).reduce((acc, cur, i) =>{
            cur[1]['rank']=i+1
            acc[cur[0]] =cur[1]
            return acc;
          }, {});  
    }
}