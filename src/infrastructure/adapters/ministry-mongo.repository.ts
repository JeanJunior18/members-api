import { Injectable, Provider } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginateFilterDto } from 'src/infrastructure/utils/paginated-filter.dto';
import {
  Ministry,
  MinistryDocument,
} from 'src/modules/ministry/core/domain/model/ministry.entity';
import { MinistryRepositoryPort } from 'src/modules/ministry/core/ports/ministry-repository.port';
import { CreateMinistryDto } from 'src/modules/ministry/userInterface/dto/create-ministry.dto';

@Injectable()
export class MinistryMongoRepositoryAdapter implements MinistryRepositoryPort {
  constructor(
    @InjectModel(Ministry.name)
    private readonly memberModel: Model<MinistryDocument>,
  ) {}

  async find(query?: PaginateFilterDto) {
    const { limit, offset } = query;
    return this.memberModel
      .find()
      .limit(Number(limit))
      .skip(Number(offset))
      .populate('leader')
      .populate('members');
  }

  async findByEmail(email: string) {
    return this.memberModel.findOne({ email });
  }

  async create(data: CreateMinistryDto) {
    const ministry = new this.memberModel(data);
    return ministry.save();
  }

  async update(id: string, data: string) {
    await this.memberModel.updateOne({ _id: id });
    return this.memberModel.findOne({ _id: id });
  }

  async delete(id: string) {
    await this.memberModel.deleteOne({ _id: id });
  }

  async count(data: PaginateFilterDto) {
    delete data.limit;
    delete data.offset;
    return this.memberModel.countDocuments(Object.assign({}, data));
  }
}

export const MinistryRepositoryProvider: Provider<MinistryRepositoryPort> = {
  provide: MinistryRepositoryPort,
  useClass: MinistryMongoRepositoryAdapter,
};
