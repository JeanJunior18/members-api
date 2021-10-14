import { PaginateFilterDto } from 'src/infrastructure/utils/paginated-filter.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetMemberFilterDto extends PaginateFilterDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  birthDate?: Date;
}
