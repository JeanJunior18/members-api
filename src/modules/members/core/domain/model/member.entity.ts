import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';

@Schema({ collection: 'members' })
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
}

export type MemberDocument = Member & Document;

export const MemberSchema = SchemaFactory.createForClass(Member);
