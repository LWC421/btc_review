import { PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { UserEntity } from '../users.entity';

export class UserResiterDTO extends PickType(UserEntity, [
  'email',
  'nickname',
] as const) {
  @IsString()
  @IsNotEmpty({ message: '비밀번호를 입력해주세요' })
  password: string;
}
