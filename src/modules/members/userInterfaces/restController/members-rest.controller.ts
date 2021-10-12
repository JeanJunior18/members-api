import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateMemberDto } from 'src/modules/members/userInterfaces/dto/create-member.dto';
import { GetMemberFilterDto } from 'src/modules/members/userInterfaces/dto/get-member-filter.dto';
import { UpdateMemberDto } from 'src/modules/members/userInterfaces/dto/update-member.dto';
import {
  CreateMembersService,
  DeleteMemberService,
  GetMembersService,
  UpdateMemberService,
} from 'src/modules/members/core/services/useCases';

@Controller('members')
export class MembersRestController {
  constructor(
    private readonly getMembersService: GetMembersService,
    private readonly createMembersService: CreateMembersService,
    private readonly updateMemberService: UpdateMemberService,
    private readonly deleteMemberService: DeleteMemberService,
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
    return this.updateMemberService.execute(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteMemberService.execute(id);
  }
}
