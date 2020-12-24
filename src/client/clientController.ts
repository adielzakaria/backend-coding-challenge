import { Controller, Get, Render } from '@nestjs/common';
import { ClientService } from './clientService';

@Controller()
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  @Render('index')
  async getTrends() {
    return await this.clientService.getTrend();
  }
}
