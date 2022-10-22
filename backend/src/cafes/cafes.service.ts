import { Injectable } from '@nestjs/common';
import { CafesRepository } from './cafes.repository';

@Injectable()
export class CafesService {
  constructor(private cafesRepository: CafesRepository) {}

  async getAllCafe() {
    return this.cafesRepository.findAll();
  }
}
