import { Injectable } from '@nestjs/common';
import { MemberRepositoryPort } from 'src/modules/member/core/ports/member-repository.port';
import { UpdateMemberDto } from 'src/modules/member/userInterfaces/dto/update-member.dto';

@Injectable()
export class UpdateMemberService {
  constructor(private readonly memberRepository: MemberRepositoryPort) {}

  async execute(id: string, data: UpdateMemberDto) {
    return await this.memberRepository.update(id, data);
  }
}
