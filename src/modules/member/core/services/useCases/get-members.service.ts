import { Injectable } from '@nestjs/common';
import { PaginationPort } from 'src/infrastructure/ports/pagination.port';
import { Member } from 'src/modules/member/core/domain/model/member.entity';
import { MemberRepositoryPort } from 'src/modules/member/core/ports/member-repository.port';
import { GetMemberFilterDto } from 'src/modules/member/userInterfaces/dto/get-member-filter.dto';

@Injectable()
export class GetMembersService {
  constructor(private readonly memberRepository: MemberRepositoryPort) {}

  async execute({
    limit,
    offset,
    ...filter
  }: GetMemberFilterDto): Promise<PaginationPort<Member>> {
    limit = limit || 10;
    offset = offset || 0;

    const members = await this.memberRepository.find({
      limit,
      offset,
      ...filter,
    });
    const total = await this.memberRepository.count(filter);

    return {
      limit,
      offset,
      total,
      result: members,
    };
  }
}
