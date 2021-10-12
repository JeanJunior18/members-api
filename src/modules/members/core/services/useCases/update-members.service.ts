import { Injectable } from '@nestjs/common';
import { MemberRepositoryPort } from 'src/modules/members/core/ports/member-repository.port';
import { UpdateMemberDto } from 'src/modules/members/userInterfaces/dto/update-member.dto';

@Injectable()
export class UpdateMembersService {
  constructor(private readonly memberRepository: MemberRepositoryPort) {}

  async execute(id: string, data: UpdateMemberDto) {
    return await this.memberRepository.update(id, data);
  }
}
