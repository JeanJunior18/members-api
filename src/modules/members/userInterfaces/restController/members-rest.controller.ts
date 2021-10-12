import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {
  CreateMembersService,
  GetMembersService,
} from 'src/modules/members/core/services/useCases';
import { CreateMemberDto } from 'src/modules/members/userInterfaces/dto/create-member.dto';
import { GetMemberFilterDto } from 'src/modules/members/userInterfaces/dto/get-member-filter.dto';

@Controller('members')
export class MembersRestController {
  constructor(
    private readonly getMembersService: GetMembersService,
    private readonly createMembersService: CreateMembersService,
  ) {}

  @Get('')
  list(@Query() query: GetMemberFilterDto) {
    return this.getMembersService.execute(query);
  }

  @Post('')
  create(@Body() data: CreateMemberDto) {
    return this.createMembersService.execute(data);
  }
}
