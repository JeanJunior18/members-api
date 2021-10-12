import { ApiProperty } from '@nestjs/swagger';

export abstract class PaginateFilterDto {
  @ApiProperty({ required: false, default: 10 })
  limit?: number;

  @ApiProperty({ required: false, default: 0 })
  offset?: number;
}
