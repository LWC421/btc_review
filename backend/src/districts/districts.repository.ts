import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { DistrictEntity } from './districts.entity';

@Injectable()
export class DistrictsRepository extends Repository<DistrictEntity> {
  constructor(private dataSource: DataSource) {
    super(DistrictEntity, dataSource.createEntityManager());
  }

  async findAll(): Promise<Array<DistrictEntity>> {
    const result = await this.find();

    return result;
  }

  async existsByLocation(location: string): Promise<boolean> {
    const result = await this.findOneBy({ location });

    return result ? true : false;
  }
}
