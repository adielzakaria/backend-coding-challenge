/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core'
import * as helmet from 'helmet'
import { AppModule } from './appModule'
import { join } from 'path'
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'src','public'))
  app.setBaseViewsDir(join(__dirname,'..','src', 'views'))
  app.setViewEngine('hbs')
  app.use(helmet)
  await app.listen(3000)

}
bootstrap();
