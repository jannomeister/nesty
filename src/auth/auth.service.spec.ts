import { JwtModule, JwtService } from "@nestjs/jwt";
import { Test, TestingModule } from "@nestjs/testing";
import { jwtConstants } from "../_common/constants";
import { LoginService } from "./auth.interface";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/Login.dto";
import { RegisterDto } from "./dto/Register.dto";

describe("AuthService", () => {
  let authService: AuthService;
  let jwtSservice: JwtService;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [JwtModule.register(jwtConstants)],
      providers: [AuthService],
    }).compile();

    authService = moduleRef.get<AuthService>(AuthService);
    jwtSservice = moduleRef.get<JwtService>(JwtService);
  });

  it("should be defined", () => {
    expect(authService).toBeDefined();
  });

  describe("login()", () => {
    it("should be defined", () => {
      expect(authService.login).toBeDefined();
    });

    it("should return an object with the accessToken property", async () => {
      const params: LoginDto = { username: "user1", password: "123456" };
      const accessToken = "akjhdsaklsdhkahsdkj";
      const result: LoginService = { accessToken };
      jest.spyOn(jwtSservice, "sign").mockImplementation(() => accessToken);
      expect(await authService.login(params)).toEqual(result);
    });
  });

  describe("register()", () => {
    it("should be defined", () => {
      expect(authService.register).toBeDefined();
    });

    it("should return an object with the username property", async () => {
      const params: RegisterDto = {
        username: "user1",
        password: "1234",
        confirmPassword: "1234",
      };
      const result = { username: params.username };
      expect(await authService.register(params)).toEqual(result);
    });
  });
});
