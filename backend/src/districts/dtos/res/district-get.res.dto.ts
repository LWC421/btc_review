import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { DistrictEntity } from 'src/districts/districts.entity';

export class DistrictGetResDto {
  @IsArray()
  @ApiProperty({
    example: [
      { location: '대구' },
      { location: '서울' },
      { location: '동성로' },
    ],
    description: '로그인 시 패스워드',
  })
  districts: Array<DistrictEntity>;
}
