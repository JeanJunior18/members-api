import { Controller, Get, Query } from '@nestjs/common';
import { GetMembersService } from 'src/modules/members/core/services/useCases/get-members.service';
import { GetMemberFilterDto } from 'src/modules/members/userInterfaces/dto/get-member-filter.dto';

@Controller('members')
export class MembersRestController {
  constructor(private readonly getMembersService: GetMembersService) {}

  @Get('')
  paginatedMembers(@Query() query: GetMemberFilterDto) {
    return this.getMembersService.execute(query);
  }
}
