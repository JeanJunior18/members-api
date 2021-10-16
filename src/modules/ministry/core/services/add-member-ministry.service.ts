import { Injectable } from '@nestjs/common';
import { MemberRepositoryPort } from 'src/modules/member/core/ports/member-repository.port';
import { AddMemberMinistryDto } from 'src/modules/member/userInterfaces/dto/add-member-ministry.dto';
import { MinistryRepositoryPort } from 'src/modules/ministry/core/ports/ministry-repository.port';

@Injectable()
export class AddMemberService {
  constructor(
    private readonly memberRepository: MemberRepositoryPort,
    private readonly ministryRepository: MinistryRepositoryPort,
  ) {}

  async execute(data: AddMemberMinistryDto) {
    await this.memberRepository.addMemberToMinistry(data);
    await this.ministryRepository.addMemberToMinistry(data);
  }
}
