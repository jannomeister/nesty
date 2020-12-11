import { JwtModuleOptions } from "@nestjs/jwt";

const jwtConstants: JwtModuleOptions = {
  secret: "asdkhadkhdkhdkahdkahdkjahkdhkhakjldhsa",
  signOptions: { expiresIn: "10h" },
};

export { jwtConstants };
