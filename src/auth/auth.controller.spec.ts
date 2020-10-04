import { Test, TestingModule } from "@nestjs/testing";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { jwtConstants } from "../_common/constants";
import { LoginResponseDto } from "./dto/LoginResponse.dto";
import { LoginDto } from "./dto/Login.dto";
import { RegisterDto } from "./dto/Register.dto";
import { RegisterResponseDto } from "./dto/RegisterResponse.dto";

describe("AuthController", () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [JwtModule.register(jwtConstants)],
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    authController = moduleRef.get<AuthController>(AuthController);
    authService = moduleRef.get<AuthService>(AuthService);
  });

  it("should be defined", () => {
    expect(authController).toBeDefined();
  });

  describe("login()", () => {
    it("should be defined", () => {
      expect(authController.login).toBeDefined();
    });

    it("should successfully return the login response", async () => {
      const body: LoginDto = { username: "user1", password: "1234567" };
      const result: LoginResponseDto = { accessToken: "sample_token" };
      jest.spyOn(authService, "login").mockImplementation(async () => result);
      expect(await authController.login(body)).toEqual(result);
    });
  });

  describe("register()", () => {
    it("should be defined", () => {
      expect(authController.register).toBeDefined();
    });

    it("should successfully return the register response", async () => {
      const body: RegisterDto = {
        username: "user1",
        password: "12345",
        confirmPassword: "12345",
      };
      const result: RegisterResponseDto = {};
      jest
        .spyOn(authService, "register")
        .mockImplementation(async () => ({ username: "user1" }));
      expect(await authController.register(body)).toEqual(result);
    });
  });
});
