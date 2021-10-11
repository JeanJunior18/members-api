import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MembersRestController } from 'src/modules/members/userInterfaces/restController/members-rest.controller';
import {
  Member,
  MemberSchema,
} from 'src/modules/members/core/domain/model/member.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }]),
  ],
  providers: [],
  controllers: [MembersRestController],
})
export class MembersModule {}
