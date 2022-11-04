import {
  Body,
  Controller,
  Get,
  HttpCode,
  Logger,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { UserLoginDto } from './dtos/req/user-login.dto';
import { UserResiterDto } from './dtos/req/user-register.dto';
import { UserLoginResDto } from './dtos/res/user-login.res.dto';
import { UserProfileResDto } from './dtos/res/user-profile.res.dto';
import { UserEntity } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('User')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @ApiOperation({ summary: '회원가입' })
  @ApiResponse({ status: 201, description: '회원가입 성공' })
  @ApiResponse({ status: 400, description: '회원가입 실패' })
  @Post()
  async signup(@Body() userRegisterDTO: UserResiterDto) {
    return await this.usersService.registerUser(userRegisterDTO);
  }

  @ApiOperation({ summary: '로그인' })
  @ApiBody({ type: UserLoginDto })
  @ApiResponse({
    status: 200,
    type: UserLoginResDto,
    description: '로그인 성공',
  })
  @ApiResponse({ status: 401, description: '로그인 실패' })
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @ApiOperation({ summary: '내정보 불러오기' })
  @ApiBearerAuth('AccessToken')
  @ApiResponse({
    status: 200,
    type: UserProfileResDto,
    description: '내정보 불러오기 성공',
  })
  @ApiResponse({ status: 401, description: 'token유효 검증 실패' })
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Get()
  getProfile(@CurrentUser() currentUser: UserEntity) {
    return currentUser;
  }
}
