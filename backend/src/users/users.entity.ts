import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity, Index } from 'typeorm';

@Index('email', ['email'], { unique: true })
@Entity({ name: 'USER' })
export class UserEntity extends CommonEntity {
  @IsEmail({}, { message: '이메일이 올바르지 않습니다' })
  @IsNotEmpty({ message: '이메일을 작성해주세요' })
  @Column({ type: 'varchar', length: 30, unique: true, nullable: false })
  @ApiProperty({ example: 'test@test.com', description: '사용 가능한 이메일' })
  email: string;

  @Exclude()
  @Column({ type: 'varchar', length: 100, nullable: false })
  @ApiProperty({ example: 'password', description: '패스워드' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: '닉네임을 작성해주세요' })
  @Column({ type: 'varchar', length: 16, nullable: false })
  @ApiProperty({ example: 'minsu', description: '표시 될 닉네임' })
  nickname: string;
}
