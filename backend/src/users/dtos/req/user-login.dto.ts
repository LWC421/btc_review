import { PickType } from '@nestjs/swagger';
import { UserEntity } from 'src/users/users.entity';

export class UserLoginDto extends PickType(UserEntity, [
  'email',
  'password',
] as const) {}
