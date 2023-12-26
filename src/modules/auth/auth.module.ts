import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EvmModule } from '../evm/evm.module';

@Module({
  imports: [EvmModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
