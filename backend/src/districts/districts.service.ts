import { BadRequestException, Injectable } from '@nestjs/common';
import { DistrictsRepository } from './districts.repository';
import { DistrictCreateDto } from './dtos/req/district-create.dto';

@Injectable()
export class DistrictsService {
  constructor(private districtsRepository: DistrictsRepository) {}

  async getAllDistricts() {
    const result = await this.districtsRepository.findAll();

    return result;
  }

  async createDistrict(districtCreateDto: DistrictCreateDto) {
    const { location } = districtCreateDto;
    const isExists = await this.districtsRepository.existsByLocation(location);
    if (isExists) {
      throw new BadRequestException('존재하는 지역입니다');
    }

    await this.districtsRepository.createDistrict(location);
  }
}
