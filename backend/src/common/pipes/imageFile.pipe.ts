import { Injectable, PipeTransform } from '@nestjs/common';
import * as path from 'path';
import * as sharp from 'sharp';

//https://dev.to/andercodes/nestjs-creating-a-pipe-to-optimize-uploaded-images-5b3h
@Injectable()
export class ImageFilePipe
  implements PipeTransform<Express.Multer.File, Promise<string>>
{
  async transform(image: Express.Multer.File): Promise<string> {
    if (!image) {
      //이미지가 없을 경우
      return null;
    }
    const height = 640;
    const fileDir = path.join('dist', 'uploads');

    //https://sharp.pixelplumbing.com/api-output#webp
    const webpOptions = {
      quality: 100, //integer 1 ~ 100 / (100 is high)
      lossless: false, //compression mode
      effort: 2, //cpu effort, 0(fastest) ~ 6(slowest)
    };

    // const originalName = path.parse(image.originalname).name;
    const randomName = Array(32)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');

    const filename = Date.now() + '-' + randomName + '.webp';

    await sharp(image.buffer)
      .resize({ height: height })
      .webp(webpOptions)
      .withMetadata() //이미지 메타정보 유지
      .toFile(path.join(fileDir, filename));

    return filename;
  }
}
