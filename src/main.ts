import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as helmet from "helmet";
import * as rateLimit from "express-rate-limit";

const initCors = () => {
  const validateOrigin = (origin, next) => {
    if (process.env.NODE_ENV === "production") {
      next(null, true);
    } else if (process.env.NODE_ENV === "staging") {
      next(null, true);
    } else {
      next(null, true);
    }
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
    .setTitle(process.env.SWAGGER_TITLE)
    .setVersion("0.0.1")
    .setDescription(process.env.SWAGGER_DESCRIPTION)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(process.env.SWAGGER_ENDPOINT, app, document);
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

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
