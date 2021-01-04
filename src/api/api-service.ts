import { Injectable } from '@nestjs/common';
import {
  fetchFromApi,
  Language,
  _30DaysAgoDate,
  compareObjectsByKey,
} from 'src/helpers/index';

@Injectable()
export class ApiService {
  async getTrendingLanguages(key: string, order: string) {
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
    const languages = this.cleanGithubData(repositories);
    return this.reduce(
      Object.entries(languages).sort((a, b) =>
        order == 'desc'
          ? compareObjectsByKey(b[1], a[1], keys)
          : compareObjectsByKey(a[1], b[1], keys),
      ),
    );
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
