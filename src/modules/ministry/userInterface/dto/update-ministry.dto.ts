import { PartialType } from '@nestjs/mapped-types';
import { CreateMinistryDto } from 'src/modules/ministry/userInterface/dto/create-ministry.dto';

export class UpdateMinistryDto extends PartialType(CreateMinistryDto) {}
