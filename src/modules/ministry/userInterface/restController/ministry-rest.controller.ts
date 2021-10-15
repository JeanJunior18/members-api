import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PaginateFilterDto } from 'src/infrastructure/utils/paginated-filter.dto';
import { UpdateMinistryService } from 'src/modules/ministry/core/services';
import { CreateMinistryService } from 'src/modules/ministry/core/services/create-ministry.service';
import { GetMinistryService } from 'src/modules/ministry/core/services/get-ministry.services';
import { CreateMinistryDto } from 'src/modules/ministry/userInterface/dto/create-ministry.dto';
import { UpdateMinistryDto } from 'src/modules/ministry/userInterface/dto/update-ministry.dto';

@Controller('ministry')
export class MinistryController {
  constructor(
    private readonly createMinistryService: CreateMinistryService,
    private readonly getMinistryService: GetMinistryService,
    private readonly updateMinistryService: UpdateMinistryService,
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
}
