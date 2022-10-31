import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { ImageFilePipe } from 'src/common/pipes/imageFile.pipe';
import { CafesService } from './cafes.service';

@Controller('cafes')
@ApiTags('Cafe')
export class CafesController {
  constructor(private readonly cafesService: CafesService) {}

  @Get()
  async getAllCafe() {
    return this.cafesService.getAllCafe();
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async postCafe(@UploadedFile(ImageFilePipe) fileName: string) {
    console.log(fileName);
  }
}
