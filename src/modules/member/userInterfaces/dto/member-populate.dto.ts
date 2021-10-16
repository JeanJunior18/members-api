import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { PopulateResponseDto } from 'src/infrastructure/utils/populate-response.dto';

export class MemberPopulateDto {
  @ApiProperty()
  @IsString()
  _id: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ type: [PopulateResponseDto] })
  ministries: PopulateResponseDto[];
}
