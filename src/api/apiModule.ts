/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ApiService } from './ApiService';
import { ApiController } from './ApiController';
@Module({
    imports: [],
    controllers: [ApiController],
    providers: [ApiService],
  })
  export class ApiModule {}