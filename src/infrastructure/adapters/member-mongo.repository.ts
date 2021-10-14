import { Injectable, Provider } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Member,
  MemberDocument,
} from 'src/modules/member/core/domain/model/member.entity';
import { MemberRepositoryPort } from 'src/modules/member/core/ports/member-repository.port';
import { CreateMemberDto } from 'src/modules/member/userInterfaces/dto/create-member.dto';
import { GetMemberFilterDto } from 'src/modules/member/userInterfaces/dto/get-member-filter.dto';
import { UpdateMemberDto } from 'src/modules/member/userInterfaces/dto/update-member.dto';

@Injectable()
export class MemberMongoRepositoryAdapter implements MemberRepositoryPort {
  constructor(
    @InjectModel(Member.name)
    private readonly memberModel: Model<MemberDocument>,
  ) {}

  async find(query?: GetMemberFilterDto) {
    const { limit, offset, ...filter } = query;
    return this.memberModel
      .find(filter)
      .limit(Number(limit))
      .skip(Number(offset));
  }

  async findByEmail(email: string) {
    return this.memberModel.findOne({ email });
  }

  async create(data: CreateMemberDto) {
    return this.memberModel.create(data);
  }

  async update(id: string, data: UpdateMemberDto) {
    await this.memberModel.updateOne({ _id: id }, data);
    return this.memberModel.findOne({ _id: id });
  }

  async delete(id: string) {
    await this.memberModel.deleteOne({ _id: id });
  }

  async count(data: GetMemberFilterDto) {
    delete data.limit;
    delete data.offset;
    return this.memberModel.countDocuments(Object.assign({}, data));
  }
}

export const MemberRepositoryProvider: Provider<MemberRepositoryPort> = {
  provide: MemberRepositoryPort,
  useClass: MemberMongoRepositoryAdapter,
};
