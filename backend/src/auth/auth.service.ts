import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { UsersRepository } from 'src/users/users.repository';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from 'src/users/dtos/req/user-login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogin(data: UserLoginDto) {
    const { email, password } = data;

    console.log(email, password);
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new BadRequestException('이메일 또는 비밀번호를 확인해주세요');
    }

    const isValidatePassword: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isValidatePassword) {
      throw new BadRequestException('이메일 또는 비밀번호를 확인해주세요');
    }

    const payload = { email, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
