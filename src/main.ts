import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import { AppModule } from './app-module';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import path from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(path.join(__dirname, '..', 'src', 'public'));
  app.setBaseViewsDir(path.join(__dirname, '..', 'src', 'views'));
  app.setViewEngine('hbs');
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();
