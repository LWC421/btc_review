import { PickType } from '@nestjs/swagger';
import { UserEntity } from 'src/users/users.entity';

export class UserProfileResDto extends PickType(UserEntity, [
  'email',
  'nickname',
  'createdAt',
  'updatedAt',
  'id',
] as const) {}
