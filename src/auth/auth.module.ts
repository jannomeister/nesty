import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { jwtConstants } from "../_common/constants";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
  imports: [JwtModule.register(jwtConstants)],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
