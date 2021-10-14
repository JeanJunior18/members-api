import { Injectable } from '@nestjs/common';
import { PaginationPort } from 'src/infrastructure/ports/pagination.port';
import { PaginateFilterDto } from 'src/infrastructure/utils/paginated-filter.dto';
import { Ministry } from 'src/modules/ministry/core/domain/model/ministry.entity';
import { MinistryRepositoryPort } from 'src/modules/ministry/core/ports/ministry-repository.port';

@Injectable()
export class GetMinistryService {
  constructor(private readonly ministryRepository: MinistryRepositoryPort) {}

  async execute({
    limit,
    offset,
    ...filter
  }: PaginateFilterDto): Promise<PaginationPort<Ministry>> {
    limit = limit || 10;
    offset = offset || 0;

    const total = await this.ministryRepository.count(filter);

    const ministries = await this.ministryRepository.find({
      limit,
      offset,
      ...filter,
    });

    return {
      limit,
      offset,
      total,
      result: ministries,
    };
  }
}
