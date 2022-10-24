import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsString } from 'class-validator';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity, Index } from 'typeorm';

@Index('name', ['name'], { unique: false })
@Entity({ name: 'CAFE' })
export class CafeEntity extends CommonEntity {
  @IsString()
  @Column({ type: 'varchar', length: 20, nullable: false })
  @ApiProperty({ example: '이스케이프', description: '카페명' })
  name: string;

  @IsString()
  @Column({ type: 'varchar', length: 50, nullable: false })
  @ApiProperty({
    example: '경기도 성남시 분당구 정자동 178-1',
    description: '지번주소',
  })
  address: string;

  @IsString()
  @Column({ type: 'varchar', length: 50, nullable: false })
  @ApiProperty({
    example: '경기도 성남시 분당구 불정로 6',
    description: '도로명주소',
  })
  loadAddresss: string;

  @IsDecimal()
  @Column({ type: 'decimal', nullable: false })
  @ApiProperty({ example: 36.123456, description: '위도' })
  latitude: number;

  @IsDecimal()
  @Column({ type: 'decimal', nullable: false })
  @ApiProperty({ example: 128.123456, description: '경도' })
  longitude: number;

  @IsString()
  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    default: '/cafe_default.png',
  })
  image: string;
}
