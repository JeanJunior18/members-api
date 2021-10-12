import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function init(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('MS Product Inventory Manager')
    .setDescription('MS Product Inventory Manager API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}

export default { init };
