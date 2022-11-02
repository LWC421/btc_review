import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { UserResiterDto } from './dtos/req/user-register.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private usersRepository: UsersRepository) {}

  async registerUser(userRegisterDTO: UserResiterDto): Promise<void> {
    const { email, nickname } = userRegisterDTO;
    const isEmailExist = await this.usersRepository.existsByEmail(email);
    if (isEmailExist) {
      throw new BadRequestException('이미 가입된 메일입니다');
    }
    const isNicknameExist = await this.usersRepository.existsByNickname(
      nickname,
    );
    if (isNicknameExist) {
      throw new BadRequestException('중복되는 닉네임입니다');
    }

    // try {
    await this.usersRepository.createUser(userRegisterDTO);
    // } catch (error) {
    //   throw new BadRequestException('잠시 후 다시 시도해주세요');
    // }
  }
}
