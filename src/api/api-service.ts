import { Injectable } from '@nestjs/common';
import { fetchFromApi } from 'src/helpers/dataFetcher';
import { _30DaysAgoDate } from 'src/helpers/date';
import { Language } from '../helpers/language';
@Injectable()
export class ApiService {
  async getAll(key: string, order: string) {
    const dateString = _30DaysAgoDate();
    const result = await fetchFromApi(
      'https://api.github.com',
      `/search/repositories?q=created:>${dateString}&sort=stars&order=desc&per_page=100`,
    );
    return {
      languages: this.processData(result.items, key, order),
      createdSince: dateString,
    };
  }
  //create objects from items array ,assembles all repositories under one key and leave only needed details
  cleanGithubData(repositories) {
    //maps each language with all repositories that uses it
    return repositories
      .filter((repository) => repository['language'])
      .reduce((accumulator, current) => {
        const lang = accumulator[current['language']] ?? new Language();
        lang.addRepository(current['html_url']);
        lang.addStars(current['stargazers_count']);
        accumulator[current['language']] = lang;
        return accumulator;
      }, {});
  }

  processData(repositories, key, order) {
    const keys =
      key == 'repositories' ? `'numberOfRepositories'` : `'accumulatedStars'`;
    const ord = order == 'desc' ? 'b[1],a[1]' : 'a[1],b[1]';
    const languages = this.cleanGithubData(repositories);
    const sortBody = `
    function compareObjectsByKey(object1, object2, key) {
  return object1[key] > object2[key] ? 1 : object1[key] < object2[key] ? -1 : 0;
}   
    return Object.entries(languages).sort((a,b)=>compareObjectsByKey(${ord},${keys}))`;
    const sort = new Function('languages', sortBody);
    return this.reduce(sort(languages));
  }
  reduce(repositories) {
    return repositories.reduce(
      (accumulator, current, index) => {
        current[1]['rank'] = index + 1;
        accumulator[current[0]] = current[1];
        accumulator['totalNumberOfRepositories'] +=
          current[1]['numberOfRepositories'];
        return accumulator;
      },
      { totalNumberOfRepositories: 0 },
    );
  }
}
