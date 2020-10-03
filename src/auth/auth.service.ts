import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginService, RegisterService } from "./auth.interface";
import { LoginDto } from "./dto/Login.dto";
import { RegisterDto } from "./dto/Register.dto";

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {
    //
  }

  // You can change or extend the logic of this service
  // by adding database integration
  async login(data: LoginDto): Promise<LoginService> {
    const mockUserId = 1;
    const payload = { userId: mockUserId, username: data.username };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  // You can change or extend the logic of this service
  // by adding database integration
  async register(data: RegisterDto): Promise<RegisterService> {
    return { username: data.username };
  }
}
