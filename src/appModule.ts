import { Module } from '@nestjs/common';
import { ApiModule } from './api/apiModule';
import { AppController } from './appController';
import { AppService } from './appService';

@Module({
  imports: [ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
