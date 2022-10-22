import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserLoginDto } from './dtos/req/user-login.dto';
import { UserResiterDTO } from './dtos/user-register.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post()
  async signup(@Body() userRegisterDTO: UserResiterDTO) {
    return await this.usersService.registerUser(userRegisterDTO);
  }

  @Post('login')
  async login(@Body() userLoginDTO: UserLoginDto) {
    return this.authService.jwtLogin(userLoginDTO);
  }
}
