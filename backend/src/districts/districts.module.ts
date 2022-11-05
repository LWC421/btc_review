import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CafeEntity } from 'src/cafes/cafes.entity';
import { DistrictsController } from './districts.controller';
import { DistrictEntity } from './districts.entity';
import { DistrictsRepository } from './districts.repository';
import { DistrictsService } from './districts.service';

@Module({
  imports: [TypeOrmModule.forFeature([DistrictEntity, CafeEntity])],
  controllers: [DistrictsController],
  providers: [DistrictsService, DistrictsRepository],
})
export class DistrictsModule {}
