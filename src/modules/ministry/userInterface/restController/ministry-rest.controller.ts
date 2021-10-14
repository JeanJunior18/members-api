import { Body, Controller, Post } from '@nestjs/common';
import { CreateMinistryService } from 'src/modules/ministry/core/services/create-ministry.service';
import { CreateMinistryDto } from 'src/modules/ministry/userInterface/dto/create-ministry.dto';

@Controller('ministry')
export class MinistryController {
  constructor(private readonly createMinistryService: CreateMinistryService) {}

  @Post('')
  create(@Body() data: CreateMinistryDto) {
    return this.createMinistryService.execute(data);
  }
}
