import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CafeEntity } from './cafes.entity';

@Injectable()
export class CafesRepository extends Repository<CafeEntity> {
  constructor(private dataSource: DataSource) {
    super(CafeEntity, dataSource.createEntityManager());
  }

  async findAll(): Promise<Array<CafeEntity>> {
    const result = await this.find();

    return result;
  }
}
