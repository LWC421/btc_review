import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserResiterDTO } from './dtos/user-register.dto';
import { UserEntity } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}
  async registerUser(userRegisterDTO: UserResiterDTO): Promise<void> {
    const { email, password } = userRegisterDTO;
    const isUserExist = this.usersRepository.findOneBy({ email });
    if (isUserExist) {
      throw new BadRequestException('이미 가입된 메일입니다');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await this.usersRepository.save({
      ...userRegisterDTO,
      password: hashedPassword,
    });
  }
}
