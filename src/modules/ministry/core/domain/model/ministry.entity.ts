import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Member } from 'src/modules/member/core/domain/model/member.entity';
import * as mongoose from 'mongoose';

@Schema({ collection: 'Ministry' })
export class Ministry {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Member' })
  leader: string | Member;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }])
  members: string[] | Member[];
}

export type MinistryDocument = Ministry & mongoose.Document;

export const MinistrySchema = SchemaFactory.createForClass(Ministry);
