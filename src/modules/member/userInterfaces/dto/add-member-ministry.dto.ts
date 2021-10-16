import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AddMemberMinistryDto {
  @ApiProperty()
  @IsString()
  memberId: number;

  @ApiProperty()
  @IsString()
  ministryId: number;
}
