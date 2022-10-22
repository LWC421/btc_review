import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { UserEntity } from 'src/users/users.entity';

export class UserLoginDto extends PickType(UserEntity, ['email'] as const) {
  @IsString()
  @IsNotEmpty({ message: '비밀번호를 입력해주세요' })
  @ApiProperty({ example: 'test', description: '로그인 시 패스워드' })
  password: string;
}
