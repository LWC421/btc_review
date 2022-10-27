import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsUUID } from 'class-validator';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export abstract class CommonEntity {
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: 'abc123456789', description: '유저 고유 id' })
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  @ApiProperty({
    example: '2022-01-01T01:23:45.678',
    description: '생성 날짜',
  })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @ApiProperty({
    example: '2022-01-01T01:23:45.678',
    description: '정보 변경된 날짜',
  })
  updatedAt: Date;

  @Exclude()
  @DeleteDateColumn({
    type: 'timestamp',
  })
  deletedAt?: Date | null;
}
