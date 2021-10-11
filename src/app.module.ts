import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MembersModule } from 'src/modules/members/members.module';

@Module({
  imports: [MembersModule, MongooseModule.forRoot(process.env.MONGO_URI)],
})
export class AppModule {}
