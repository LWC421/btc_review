import { PickType } from '@nestjs/swagger';
import { UserEntity } from 'src/users/users.entity';

export class UserProfileRes extends PickType(UserEntity, [
  'email',
  'nickname',
  'createdAt',
  'updatedAt',
  'id',
] as const) {}
