import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CafesService } from './cafes.service';

@Controller('cafes')
@ApiTags('Cafe')
export class CafesController {
  constructor(private readonly cafesService: CafesService) {}

  @Get()
  async getAllCafe() {
    return this.cafesService.getAllCafe();
  }
}
