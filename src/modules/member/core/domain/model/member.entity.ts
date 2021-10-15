import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { Document } from 'mongoose';
import { Ministry } from 'src/modules/ministry/core/domain/model/ministry.entity';
import * as mongoose from 'mongoose';

@Schema({ collection: 'Member' })
export class Member {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  @Exclude()
  password: string;

  @Prop({ required: false })
  birthDate: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Ministry' })
  ministries: Ministry[];
}

export type MemberDocument = Member & Document;

export const MemberSchema = SchemaFactory.createForClass(Member);
