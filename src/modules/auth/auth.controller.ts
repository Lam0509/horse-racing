import { Body, Controller, Logger } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { LogInDto } from 'src/core/dto/login.dto';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  @Post('/login')
  logIn(@Body() { address, signedMessage }: LogInDto): any {
    console.log(address, signedMessage);
  }
}
