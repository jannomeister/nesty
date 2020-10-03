import { Controller, Get, Redirect } from "@nestjs/common";

@Controller()
export class AppController {
  constructor() {
    //
  }

  @Get()
  @Redirect("api-docs")
  init(): boolean {
    return true;
  }
}
