import { Controller, Get, Query } from '@nestjs/common';
import { ApiService } from './api-service';
@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('trends')
  async getall(
    @Query('sort') key?: 'stars' | 'repositories',
    @Query('order') order?: 'asc' | 'desc',
  ): Promise<any> {
    key ??= 'repositories';
    order ??= 'desc';
    return await this.apiService.getAll(key, order);
  }
}
