import { Controller, Get, HttpCode, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DistrictsService } from './districts.service';
import { DistrictCreateDto } from './dtos/req/district-create.dto';
import { DistrictGetResDto } from './dtos/res/district-get.res.dto';

@Controller('districts')
@ApiTags('Districts')
export class DistrictsController {
  constructor(private readonly districtsService: DistrictsService) {}

  @ApiOperation({ summary: '지역정보 불러오기' })
  @ApiResponse({
    status: 200,
    type: DistrictGetResDto,
    description: '지역정보 불러오기성공',
  })
  @ApiResponse({ status: 400, description: '지역정보 불러오기실패' })
  @Get()
  async getAllDistricts() {
    const result = this.districtsService.getAllDistricts();
    return result;
  }

  @ApiOperation({ summary: '지역정보 생성' })
  @ApiBody({ type: DistrictCreateDto })
  @ApiResponse({ status: 201, description: '지역정보 생성 성공' })
  @ApiResponse({ status: 400, description: '지역정보 생성 실패' })
  @ApiResponse({ status: 401, description: 'token유효 검증 실패' })
  @ApiBearerAuth()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard)
  @Post()
  async createDistrict(districtCreateDto: DistrictCreateDto) {
    await this.districtsService.createDistrict(districtCreateDto);
  }
}
