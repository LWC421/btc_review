import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserLoginResDto {
  @ApiProperty({
    example: 'accessToken.dddd',
    description: 'Access Token',
    required: true,
  })
  @IsString()
  access_token: string;
}
