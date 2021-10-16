import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { PopulateResponseDto } from 'src/infrastructure/utils/populate-response.dto';

@Schema({ collection: 'Member' })
export class Member {
  @Prop()
  _id: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop({ select: false })
  @Exclude()
  password: string;

  @Prop({ required: false })
  birthDate: Date;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Ministry' }])
  ministries: PopulateResponseDto[];
}

export type MemberDocument = Member & Document;

export const MemberSchema = SchemaFactory.createForClass(Member);
