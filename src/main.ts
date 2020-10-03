import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as helmet from "helmet";
import * as rateLimit from "express-rate-limit";

const initCors = () => {
  const validateOrigin = (origin, next) => {
    // TODO: handle different environments
    next(null, true);
  };

  return { origin: validateOrigin, credentials: true };
};

const initHelmet = () => {
  return helmet({
    referrerPolicy: { policy: "no-referrer" },
  });
};

const initSwagger = app => {
  const options = new DocumentBuilder()
    .setTitle("API Docs")
    .setVersion("0.0.1")
    .setDescription("These are all the available APIs")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api-docs", app, document);
};

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors(initCors());
  app.use(initHelmet());
  app.set("trust proxy", 1);
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );

  initSwagger(app);

  await app.listen(3000);
}
bootstrap();
