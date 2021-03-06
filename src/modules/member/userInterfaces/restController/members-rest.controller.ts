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
import {
  ApiOperation,
  ApiResponse,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { CreateMemberDto } from 'src/modules/member/userInterfaces/dto/create-member.dto';
import { GetMemberFilterDto } from 'src/modules/member/userInterfaces/dto/get-member-filter.dto';
import { UpdateMemberDto } from 'src/modules/member/userInterfaces/dto/update-member.dto';
import {
  CreateMembersService,
  DeleteMemberService,
  GetMembersService,
  UpdateMemberService,
} from 'src/modules/member/core/services/useCases';
import { MemberPopulateDto } from 'src/modules/member/userInterfaces/dto/member-populate.dto';
import { PaginationPort } from 'src/infrastructure/ports/pagination.port';
import { GetMemberResponseDto } from 'src/modules/member/userInterfaces/dto/get-member-response.dto';

@Controller('members')
export class MembersRestController {
  constructor(
    private readonly getMembersService: GetMembersService,
    private readonly createMembersService: CreateMembersService,
    private readonly updateMemberService: UpdateMemberService,
    private readonly deleteMemberService: DeleteMemberService,
  ) {}

  @ApiOperation({
    summary: 'List members',
  })
  @ApiResponse({ type: GetMemberResponseDto })
  @Get('')
  list(@Query() query: GetMemberFilterDto) {
    return this.getMembersService.execute(query);
  }

  @ApiOperation({ summary: 'Create member' })
  @Post('')
  create(@Body() data: CreateMemberDto) {
    return this.createMembersService.execute(data);
  }

  @ApiOperation({ summary: 'Update member' })
  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateMemberDto) {
    return this.updateMemberService.execute(id, data);
  }

  @ApiOperation({ summary: 'Delete member' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteMemberService.execute(id);
  }
}
