import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CafeEntity } from 'src/cafes/cafes.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity({ name: 'DISTRICT' })
export class DistrictEntity extends CommonEntity {
  @IsString()
  @IsNotEmpty()
  @Column({ type: 'varchar', length: 45 })
  @ApiProperty({ example: '대구', description: '지역명' })
  location: string;

  @ManyToMany(() => CafeEntity, (cafe: CafeEntity) => cafe.districts)
  cafes: CafeEntity[];
}
