import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberDto } from 'src/modules/members/userInterfaces/dto/create-member.dto';

export class UpdateMemberDto extends PartialType(CreateMemberDto) {}
