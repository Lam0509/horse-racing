import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { SocketModule } from './modules/socket/socket.module';
import { HorseRaceModule } from './modules/horserace/horserace.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    SocketModule,
    HorseRaceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
