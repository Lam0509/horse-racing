import { Body, Controller, Logger } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { LoginRequestDto } from './auth.dto';
import { EvmService } from '../evm/evm.service';
import { LoginResponseDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly evmService: EvmService) {}

  @Post('/login')
  async logIn(
    @Body() { address, signedMessage }: LoginRequestDto,
  ): Promise<LoginResponseDto | any> {
    try {
      this.logger.log(`User have address ${address} log in ...`);
      const result = await this.evmService.verifyMessage(
        address,
        signedMessage,
      );
      console.log(result);
    } catch (err) {
      this.logger.error(err);
    }
  }
}
