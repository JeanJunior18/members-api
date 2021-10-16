import { PaginateFilterDto } from 'src/infrastructure/utils/paginated-filter.dto';
import { AddMemberMinistryDto } from 'src/modules/member/userInterfaces/dto/add-member-ministry.dto';
import { Ministry } from 'src/modules/ministry/core/domain/model/ministry.entity';
import { CreateMinistryDto } from 'src/modules/ministry/userInterface/dto/create-ministry.dto';
import { UpdateMinistryDto } from 'src/modules/ministry/userInterface/dto/update-ministry.dto';

export abstract class MinistryRepositoryPort {
  find: (query?: PaginateFilterDto) => Promise<Ministry[]>;
  create: (data: CreateMinistryDto) => Promise<Ministry>;
  update: (id: string, data: UpdateMinistryDto) => Promise<Ministry>;
  delete: (id: string) => Promise<void>;
  count: (data: PaginateFilterDto) => Promise<number>;
  addMemberToMinistry: (data: AddMemberMinistryDto) => Promise<Ministry>;
}
