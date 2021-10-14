import { Injectable } from '@nestjs/common';
import { MinistryRepositoryPort } from 'src/modules/ministry/core/ports/ministry-repository.port';
import { CreateMinistryDto } from 'src/modules/ministry/userInterface/dto/create-ministry.dto';

@Injectable()
export class CreateMinistryService {
  constructor(private readonly ministryRepository: MinistryRepositoryPort) {}

  async execute(data: CreateMinistryDto) {
    return this.ministryRepository.create(data);
  }
}
