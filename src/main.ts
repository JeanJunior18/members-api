import { NestFactory } from '@nestjs/core';
import swagger from 'src/infrastructure/plugins/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swagger.init(app);
  await app.listen(3000);
}
bootstrap();
