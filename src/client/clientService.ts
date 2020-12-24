import { Injectable } from '@nestjs/common';
import { fetchFromApi } from '../helpers/dataFetcher';
import { server } from '../helpers/server';
@Injectable()
export class ClientService {
  async getTrend() {
    return await fetchFromApi(server.baseURL, '/api/all');
  }
}
