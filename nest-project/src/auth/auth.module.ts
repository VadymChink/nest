import { Module } from '@nestjs/common';
import {JwtModule, JwtService} from "@nestjs/jwt";

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {UserService} from "../user/user.service";
import {PrismaService} from "../core/prisma.service";

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService,PrismaService,JwtService],
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '24h'
      }
    })
  ]
})
export class AuthModule {}
