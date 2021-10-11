import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MembersModule } from 'src/modules/members/members.module';

console.log(process.env.MONGO_URI);
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MembersModule,
  ],
})
export class AppModule {}
