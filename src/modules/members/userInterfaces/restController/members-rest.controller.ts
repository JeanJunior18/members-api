import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import {
  CreateMembersService,
  GetMembersService,
} from 'src/modules/members/core/services/useCases';
import { UpdateMembersService } from 'src/modules/members/core/services/useCases/update-members.service';
import { CreateMemberDto } from 'src/modules/members/userInterfaces/dto/create-member.dto';
import { GetMemberFilterDto } from 'src/modules/members/userInterfaces/dto/get-member-filter.dto';
import { UpdateMemberDto } from 'src/modules/members/userInterfaces/dto/update-member.dto';

@Controller('members')
export class MembersRestController {
  constructor(
    private readonly getMembersService: GetMembersService,
    private readonly createMembersService: CreateMembersService,
    private readonly updateMembersService: UpdateMembersService,
  ) {}

  @Get('')
  list(@Query() query: GetMemberFilterDto) {
    return this.getMembersService.execute(query);
  }

  @Post('')
  create(@Body() data: CreateMemberDto) {
    return this.createMembersService.execute(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateMemberDto) {
    return this.updateMembersService.execute(id, data);
  }
}
