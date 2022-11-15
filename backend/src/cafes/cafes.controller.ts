import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ImageFilePipe } from 'src/common/pipes/imageFile.pipe';
import { CafesService } from './cafes.service';
import { CafePostBodyDto, CafePostDto } from './dtos/req/cafe-post.dto';

@Controller('cafes')
@ApiTags('Cafe')
export class CafesController {
  constructor(private readonly cafesService: CafesService) {}

  @Get()
  async getAllCafe() {
    return this.cafesService.getAllCafe();
  }

  @ApiOperation({ summary: '카페정보 생성' })
  @ApiBody({ type: CafePostDto })
  @ApiResponse({ status: 201, description: '카페정보 생성 성공' })
  @ApiResponse({ status: 400, description: '카페정보 생성 실패' })
  @ApiResponse({ status: 401, description: 'token유효 검증 실패' })
  @ApiBearerAuth()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createCafe(
    @UploadedFile(ImageFilePipe) fileName: string | null,
    @Body() cafePostDto: CafePostBodyDto,
  ) {
    console.log(fileName ?? '파일이 없습니다');
    console.log(cafePostDto);
  }
}
