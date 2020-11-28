/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import {fetchFromApi} from '../helpers/dataFetcher'
@Injectable()
export class ClientService {
  async gettrend(){
    return await fetchFromApi('localhost:3000','/api/all') 
  }
}