import { PaginateFilterDto } from 'src/infrastructure/utils/paginated-filter.dto';
import { ApiProperty } from '@nestjs/swagger';

export class GetMemberFilterDto extends PaginateFilterDto {
  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({ required: false })
  email?: string;

  @ApiProperty({ required: false })
  birthDate?: Date;
}
