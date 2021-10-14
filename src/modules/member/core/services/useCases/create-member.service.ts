import { HttpException, Injectable } from '@nestjs/common';
import { MemberRepositoryPort } from 'src/modules/member/core/ports/member-repository.port';
import { CreateMemberDto } from 'src/modules/member/userInterfaces/dto/create-member.dto';

@Injectable()
export class CreateMembersService {
  constructor(private readonly memberRepository: MemberRepositoryPort) {}

  async execute(data: CreateMemberDto) {
    const memberAlreadyExists = await this.memberRepository.findByEmail(
      data.email,
    );

    if (memberAlreadyExists)
      throw new HttpException('Member already exists', 409);

    return this.memberRepository.create(data);
  }
}
