import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional, IsString } from 'class-validator';
export class CreateMemberDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  birthDate?: Date;
}
