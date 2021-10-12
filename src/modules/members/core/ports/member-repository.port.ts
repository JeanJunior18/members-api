import { Member } from 'src/modules/members/core/domain/model/member.entity';
import { PaginateFilterDto } from 'src/infrastructure/utils/paginated-filter.dto';
import { CreateMemberDto } from 'src/modules/members/userInterfaces/dto/create-member.dto';
import { UpdateMemberDto } from 'src/modules/members/userInterfaces/dto/update-member.dto';
import { GetMemberFilterDto } from 'src/modules/members/userInterfaces/dto/get-member-filter.dto';

export abstract class MemberRepositoryPort {
  find: (query?: PaginateFilterDto) => Promise<Member[]>;
  create: (data: CreateMemberDto) => Promise<Member>;
  update: (id: string, data: UpdateMemberDto) => Promise<Member>;
  delete: (id: string) => Promise<void>;
  count: (data: GetMemberFilterDto) => Promise<number>;
}
