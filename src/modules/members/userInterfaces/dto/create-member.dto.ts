import { ApiProperty } from '@nestjs/swagger';
export class CreateMemberDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ required: false })
  birthDate?: Date;
}
