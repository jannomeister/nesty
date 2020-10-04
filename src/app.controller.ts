import { Controller, Get, Redirect } from "@nestjs/common";

@Controller()
export class AppController {
  constructor() {
    //
  }

  @Get()
  @Redirect(process.env.SWAGGER_ENDPOINT)
  init(): boolean {
    return true;
  }
}
