import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './users.entity';

@Injectable()
export class UsersRepository extends Repository<UserEntity> {
  constructor(private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async existsByEmail(email: string): Promise<boolean> {
    const result = await this.findOneBy({ email });
    return result ? true : false;
  }
}
