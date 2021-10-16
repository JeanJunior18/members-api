import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MemberRepositoryProvider,
  MinistryRepositoryProvider,
} from 'src/infrastructure/adapters';
import {
  Member,
  MemberSchema,
} from 'src/modules/member/core/domain/model/member.entity';
import {
  Ministry,
  MinistrySchema,
} from 'src/modules/ministry/core/domain/model/ministry.entity';
import {
  AddMemberService,
  CreateMinistryService,
  GetMinistryService,
  UpdateMinistryService,
} from 'src/modules/ministry/core/services';
import { MinistryController } from 'src/modules/ministry/userInterface/restController/ministry-rest.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ministry.name, schema: MinistrySchema },
      { name: Member.name, schema: MemberSchema },
    ]),
  ],
  controllers: [MinistryController],
  providers: [
    MinistryRepositoryProvider,
    MemberRepositoryProvider,
    CreateMinistryService,
    GetMinistryService,
    UpdateMinistryService,
    AddMemberService,
  ],
})
export class MinistryModule {}
