import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import swagger from 'src/infrastructure/plugins/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  swagger.init(app);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
