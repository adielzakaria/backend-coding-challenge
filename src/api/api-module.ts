import { Module } from '@nestjs/common';
import { ApiService } from './api-service';
import { ApiController } from './api-controller';
import { LanguageModel } from 'src/language/language-model';
@Module({
  imports: [],
  controllers: [ApiController],
  providers: [ApiService, LanguageModel],
})
export class ApiModule {}
