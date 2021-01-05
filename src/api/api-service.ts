import { Injectable } from '@nestjs/common';
import { _30DaysAgoDate } from 'src/helpers/index';
import { LanguageModel } from 'src/language/language-model';
@Injectable()
export class ApiService {
  constructor(private readonly languageModel: LanguageModel) {}
  async getTrendingLanguages(key: string, order: string) {
    const dateString = _30DaysAgoDate();

    return {
      languages: this.languageModel.fetchTrendingLanguages(
        dateString,
        key,
        order,
      ),
      createdSince: dateString,
    };
  }
  //create objects from items array ,assembles all repositories under one key and leave only needed details
}
