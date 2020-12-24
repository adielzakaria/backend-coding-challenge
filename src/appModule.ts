import { Module } from '@nestjs/common';
import { ApiModule } from './api/apiModule';
import { ClientModule } from './client/clientModule';

@Module({
  imports: [ApiModule, ClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
