import { Body, Controller, Logger, Post } from '@nestjs/common';
import { UserResiterDTO } from './dtos/user-register.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(private readonly usersService: UsersService) {}

  @Post()
  async signup(@Body() userRegisterDTO: UserResiterDTO) {
    return await this.usersService.registerUser(userRegisterDTO);
  }
}
