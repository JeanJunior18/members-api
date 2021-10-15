import { Injectable } from '@nestjs/common';
import { MinistryRepositoryPort } from 'src/modules/ministry/core/ports/ministry-repository.port';
import { UpdateMinistryDto } from 'src/modules/ministry/userInterface/dto/update-ministry.dto';

@Injectable()
export class UpdateMinistryService {
  constructor(private readonly ministryRepository: MinistryRepositoryPort) {}

  async execute(id: string, data: UpdateMinistryDto) {
    return this.ministryRepository.update(id, data);
  }
}
