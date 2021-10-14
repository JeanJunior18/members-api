import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MembersModule } from 'src/modules/member/members.module';
import { MinistryModule } from 'src/modules/ministry/ministry.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MembersModule,
    MinistryModule,
  ],
})
export class AppModule {}
