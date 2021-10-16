import { Injectable, Provider } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginateFilterDto } from 'src/infrastructure/utils/paginated-filter.dto';
import { AddMemberMinistryDto } from 'src/modules/member/userInterfaces/dto/add-member-ministry.dto';
import {
  Ministry,
  MinistryDocument,
} from 'src/modules/ministry/core/domain/model/ministry.entity';
import { MinistryRepositoryPort } from 'src/modules/ministry/core/ports/ministry-repository.port';
import { CreateMinistryDto } from 'src/modules/ministry/userInterface/dto/create-ministry.dto';
import { UpdateMinistryDto } from 'src/modules/ministry/userInterface/dto/update-ministry.dto';

@Injectable()
export class MinistryMongoRepositoryAdapter implements MinistryRepositoryPort {
  constructor(
    @InjectModel(Ministry.name)
    private readonly ministryModel: Model<MinistryDocument>,
  ) {}

  async find(query?: PaginateFilterDto) {
    const { limit, offset } = query;
    return this.ministryModel
      .find()
      .limit(Number(limit))
      .skip(Number(offset))
      .populate('leader', 'name')
      .populate('members', 'name');
  }

  async findByEmail(email: string) {
    return this.ministryModel.findOne({ email });
  }

  async create(data: CreateMinistryDto) {
    const ministry = new this.ministryModel(data);
    return ministry.save();
  }

  async update(id: string, data: UpdateMinistryDto) {
    await this.ministryModel.updateOne({ _id: id }, data);
    return this.ministryModel
      .findOne({ _id: id })
      .populate(['leader', 'members']);
  }

  async delete(id: string) {
    await this.ministryModel.deleteOne({ _id: id });
  }

  async count(data: PaginateFilterDto) {
    delete data.limit;
    delete data.offset;
    return this.ministryModel.countDocuments(Object.assign({}, data));
  }

  async addMemberToMinistry({ ministryId, memberId }: AddMemberMinistryDto) {
    await this.ministryModel.updateOne(
      { _id: ministryId },
      { $addToSet: { members: memberId } },
    );
    return this.ministryModel
      .findOne({ _id: ministryId })
      .populate(['leader', 'members']);
  }
}

export const MinistryRepositoryProvider: Provider<MinistryRepositoryPort> = {
  provide: MinistryRepositoryPort,
  useClass: MinistryMongoRepositoryAdapter,
};
