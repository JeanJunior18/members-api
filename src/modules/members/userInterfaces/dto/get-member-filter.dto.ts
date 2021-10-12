import { PaginateFilterDto } from 'src/infrastructure/utils/paginated-filter.dto';

export class GetMemberFilterDto extends PaginateFilterDto {
  name?: string;
  email?: string;
  birthDate?: Date;
}
