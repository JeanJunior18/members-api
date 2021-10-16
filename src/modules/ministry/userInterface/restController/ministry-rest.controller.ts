import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import {
  AddMemberService,
  UpdateMinistryService,
  CreateMinistryService,
  GetMinistryService,
} from 'src/modules/ministry/core/services';
import { PaginateFilterDto } from 'src/infrastructure/utils/paginated-filter.dto';
import { AddMemberMinistryDto } from 'src/modules/member/userInterfaces/dto/add-member-ministry.dto';
import { CreateMinistryDto } from 'src/modules/ministry/userInterface/dto/create-ministry.dto';
import { UpdateMinistryDto } from 'src/modules/ministry/userInterface/dto/update-ministry.dto';

@Controller('ministry')
export class MinistryController {
  constructor(
    private readonly createMinistryService: CreateMinistryService,
    private readonly getMinistryService: GetMinistryService,
    private readonly updateMinistryService: UpdateMinistryService,
    private readonly addMemberService: AddMemberService,
  ) {}

  @Post()
  create(@Body() data: CreateMinistryDto) {
    return this.createMinistryService.execute(data);
  }

  @Get()
  list(@Query() query: PaginateFilterDto) {
    return this.getMinistryService.execute(query);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateMinistryDto) {
    return this.updateMinistryService.execute(id, data);
  }

  @Post('addMember')
  addMember(@Body() data: AddMemberMinistryDto) {
    return this.addMemberService.execute(data);
  }
}
