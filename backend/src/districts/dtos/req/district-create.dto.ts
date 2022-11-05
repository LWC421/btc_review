import { PickType } from '@nestjs/swagger';
import { DistrictEntity } from 'src/districts/districts.entity';

export class DistrictCreateDto extends PickType(DistrictEntity, [
  'location',
] as const) {}
