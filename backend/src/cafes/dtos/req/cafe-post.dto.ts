import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { CafeEntity } from 'src/cafes/cafes.entity';

export class CafePostBodyDto extends PickType(CafeEntity, [
  'name',
  'description',
  'address',
]) {
  @IsUUID('all', { each: true, message: '지역을 입력해주세요' })
  @ApiProperty({
    example: ['abc123456789', 'bcd123456789'],
    description: '지역 고유 id',
  })
  districtList: Array<string>;
}

export class CafePostDto extends CafePostBodyDto {
  @ApiProperty({ example: 'cat.png', description: '카페에 대한 이미지 파일' })
  image: any;
}
