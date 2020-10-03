import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

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
  const app = await NestFactory.create(AppModule);

  initSwagger(app);

  await app.listen(3000);
}
bootstrap();
