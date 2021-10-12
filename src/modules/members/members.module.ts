import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MembersRestController } from 'src/modules/members/userInterfaces/restController/members-rest.controller';
import {
  Member,
  MemberSchema,
} from 'src/modules/members/core/domain/model/member.entity';
import { MemberRepositoryProvider } from 'src/infrastructure/adapters';
import {
  GetMembersService,
  CreateMembersService,
} from 'src/modules/members/core/services/useCases';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }]),
  ],
  controllers: [MembersRestController],
  providers: [
    MemberRepositoryProvider,
    GetMembersService,
    CreateMembersService,
  ],
})
export class MembersModule {}
