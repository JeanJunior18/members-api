import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PaginateFilterDto } from 'src/infrastructure/utils/paginated-filter.dto';
import { CreateMinistryService } from 'src/modules/ministry/core/services/create-ministry.service';
import { GetMinistryService } from 'src/modules/ministry/core/services/get-ministry.services';
import { CreateMinistryDto } from 'src/modules/ministry/userInterface/dto/create-ministry.dto';

@Controller('ministry')
export class MinistryController {
  constructor(
    private readonly createMinistryService: CreateMinistryService,
    private readonly getMinistryService: GetMinistryService,
  ) {}

  @Post('')
  create(@Body() data: CreateMinistryDto) {
    return this.createMinistryService.execute(data);
  }

  @Get('')
  list(@Query() query: PaginateFilterDto) {
    return this.getMinistryService.execute(query);
  }
}
