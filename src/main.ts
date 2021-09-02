import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';
const port = process.env.PORT;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  await app.listen(port);
  Logger.log('Server Started - 4000 PORT');
}
bootstrap();
