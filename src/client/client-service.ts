import { Injectable } from '@nestjs/common';
import { fetchFromApi, server } from '../helpers';
@Injectable()
export class ClientService {
  async getTrend() {
    return await fetchFromApi(server.baseURL, '/api/trends');
  }
}
