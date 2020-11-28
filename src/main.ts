/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './appModule';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  await app.listen(3000);

}
bootstrap();
