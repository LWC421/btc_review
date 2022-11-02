import { Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DistrictEntity } from './districts.entity';
import { DistrictsService } from './districts.service';
import { DistrictCreateDto } from './dtos/req/district-create.dto';

@Controller('districts')
@ApiTags('Districts')
export class DistrictsController {
  constructor(private readonly districtsService: DistrictsService) {}

  @ApiOperation({ summary: '지역정보 불러오기' })
  @ApiResponse({
    status: 200,
    type: Array<DistrictEntity>,
    description: '지역정보 불러오기성공',
  })
  @ApiResponse({ status: 400, description: '지역정보 불러오기실패' })
  @Get()
  async getAllDistricts() {
    const result = this.districtsService.getAllDistricts();
    return result;
  }

  @ApiBody({ type: DistrictCreateDto })
  @Post()
  async createDistricts(districtCreateDto: DistrictCreateDto) {
    this.districtsService.createDistricts(districtCreateDto);
  }
}
