import { Injectable } from '@nestjs/common';
import { MemberRepositoryPort } from 'src/modules/member/core/ports/member-repository.port';

@Injectable()
export class DeleteMemberService {
  constructor(private readonly memberRepository: MemberRepositoryPort) {}

  async execute(id: string) {
    return this.memberRepository.delete(id);
  }
}
