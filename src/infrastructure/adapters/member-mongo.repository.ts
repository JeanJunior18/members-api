import { Injectable, Provider } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Member,
  MemberDocument,
} from 'src/modules/members/core/domain/model/member.entity';
import { MemberRepositoryPort } from 'src/modules/members/core/ports/member-repository.port';
import { CreateMemberDto } from 'src/modules/members/userInterfaces/dto/create-member.dto';
import { GetMemberFilterDto } from 'src/modules/members/userInterfaces/dto/get-member-filter.dto';
import { UpdateMemberDto } from 'src/modules/members/userInterfaces/dto/update-member.dto';

@Injectable()
export class MemberMongoRepositoryAdapter implements MemberRepositoryPort {
  constructor(
    @InjectModel(Member.name)
    private readonly memberModel: Model<MemberDocument>,
  ) {}

  async find(query?: GetMemberFilterDto) {
    const { limit, offset, ...filter } = query;
    return this.memberModel.find(filter).limit(limit).skip(offset);
  }

  async create(data: CreateMemberDto) {
    const product = new this.memberModel(data);
    return product.save();
  }

  async update(id: string, data: UpdateMemberDto) {
    await this.memberModel.updateOne({ _id: id }, data);
    return this.memberModel.findOne({ _id: id });
  }

  async delete(id: string) {
    await this.memberModel.deleteOne({ _id: id });
  }

  async count(data: GetMemberFilterDto) {
    const { name, email, birthDate } = data;
    return this.memberModel.countDocuments({ name, email, birthDate });
  }
}

export const MemberRepositoryProvider: Provider<MemberRepositoryPort> = {
  provide: MemberRepositoryPort,
  useClass: MemberMongoRepositoryAdapter,
};
