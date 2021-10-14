import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MembersRestController } from 'src/modules/member/userInterfaces/restController/members-rest.controller';
import {
  Member,
  MemberSchema,
} from 'src/modules/member/core/domain/model/member.entity';
import { MemberRepositoryProvider } from 'src/infrastructure/adapters';
import {
  GetMembersService,
  CreateMembersService,
  UpdateMemberService,
  DeleteMemberService,
} from 'src/modules/member/core/services/useCases';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }]),
  ],
  controllers: [MembersRestController],
  providers: [
    MemberRepositoryProvider,
    GetMembersService,
    CreateMembersService,
    UpdateMemberService,
    DeleteMemberService,
  ],
})
export class MembersModule {}
