import { Controller, Get } from '@nestjs/common';

@Controller('members')
export class MembersRestController {
  @Get('')
  paginatedMembers() {
    return {};
  }
}
