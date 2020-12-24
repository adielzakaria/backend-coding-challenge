import { Injectable } from '@nestjs/common';
import { fetchFromApi } from 'src/helpers/dataFetcher';
import { __30DaysAgoDate } from 'src/helpers/date';
import { Language } from '../helpers/language';
@Injectable()
export class ApiService {
  async getAll(key, order) {
    const dateString = __30DaysAgoDate();
    const result = await fetchFromApi(
      'https://api.github.com',
      `/search/repositories?q=created:>${dateString}&sort=stars&order=desc&per_page=100`,
    );
    return {
      languages: this.processData(result.items, key, order),
      created_since: dateString,
    };
  }
  //create objects from items array ,assembles all repositories under one key and leave only needed details
  cleanGithubData(repositories) {
    //maps each language with all repositories that uses it
    return repositories
      .filter((repository) => repository['language'])
      .reduce((acc, cur) => {
        const lang = acc[cur['language']] ?? new Language();
        lang.addRepository(cur['html_url']);
        lang.addStars(cur['stargazers_count']);
        acc[cur['language']] = lang;
        return acc;
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
    return repositories.reduce((acc, cur, i) => {
      cur[1]['rank'] = i + 1;
      acc[cur[0]] = cur[1];
      return acc;
    }, {});
  }
}
