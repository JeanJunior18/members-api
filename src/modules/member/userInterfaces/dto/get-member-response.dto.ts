import { PaginationPort } from 'src/infrastructure/ports/pagination.port';
import { MemberPopulateDto } from 'src/modules/member/userInterfaces/dto/member-populate.dto';

export class GetMemberResponseDto extends PaginationPort<MemberPopulateDto> {}
