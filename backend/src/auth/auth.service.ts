import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/users/users.repository';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/users/users.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const isExists = await this.usersRepository.findByEmail(email);
    if (!isExists) {
      throw new BadRequestException('이메일 또는 패스워드가 일치하지않습니다');
    }

    const user = await this.usersRepository.findByEmail(email);

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (user && isValidPassword) {
      return user;
    }

    return null;
  }

  async login(user: UserEntity) {
    const payload = { email: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
