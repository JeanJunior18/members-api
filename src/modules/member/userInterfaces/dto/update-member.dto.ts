import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberDto } from 'src/modules/member/userInterfaces/dto/create-member.dto';

export class UpdateMemberDto extends PartialType(CreateMemberDto) {}
