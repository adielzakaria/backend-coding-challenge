import { Controller, Get } from '@nestjs/common'
import { ApiService } from './ApiService'

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('all')
  async getall(): Promise<any> {
    return await this.apiService.getall()
  }
}
