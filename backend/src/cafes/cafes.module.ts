import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CafesController } from './cafes.controller';
import { CafeEntity } from './cafes.entity';
import { CafesRepository } from './cafes.repository';
import { CafesService } from './cafes.service';

@Module({
  imports: [TypeOrmModule.forFeature([CafeEntity])],
  controllers: [CafesController],
  providers: [CafesService, CafesRepository],
  exports: [CafesRepository],
})
export class CafesModule {}
