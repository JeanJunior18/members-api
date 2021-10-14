import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MinistryRepositoryProvider } from 'src/infrastructure/adapters';
import {
  Ministry,
  MinistrySchema,
} from 'src/modules/ministry/core/domain/model/ministry.entity';
import { CreateMinistryService } from 'src/modules/ministry/core/services/create-ministry.service';
import { MinistryController } from 'src/modules/ministry/userInterface/restController/ministry-rest.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ministry.name, schema: MinistrySchema },
    ]),
  ],
  controllers: [MinistryController],
  providers: [MinistryRepositoryProvider, CreateMinistryService],
})
export class MinistryModule {}
