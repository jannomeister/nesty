import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";

// dto
import { LoginDto } from "./dto/Login.dto";
import { LoginResponseDto } from "./dto/LoginResponse.dto";
import { RegisterDto } from "./dto/Register.dto";
import { RegisterResponseDto } from "./dto/RegisterResponse.dto";

@ApiTags("Authentication")
@Controller("api/authenticate")
export class AuthController {
  constructor(private authService: AuthService) {
    //
  }

  @Post("login")
  @HttpCode(200)
  @ApiResponse({ status: 200, type: LoginResponseDto })
  @ApiResponse({ status: 400 })
  @ApiResponse({ status: 401 })
  async login(@Body() data: LoginDto): Promise<LoginResponseDto> {
    return await this.authService.login(data);
  }

  @Post("register")
  @HttpCode(200)
  @ApiResponse({ status: 200, type: RegisterResponseDto })
  @ApiResponse({ status: 400 })
  async register(@Body() data: RegisterDto): Promise<RegisterResponseDto> {
    return await this.authService.register(data);
  }
}
