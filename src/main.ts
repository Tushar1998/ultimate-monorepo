import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Documentation
  const document = new DocumentBuilder()
    .setTitle('Ultimate Monorepo Root API')
    .setDescription(
      'Root Microservice to manage requests from admin and web apps',
    )
    .setVersion('1.0')
    .addOAuth2({
      type: 'openIdConnect',
      description:
        "The 'oauth2' scheme is used to secure the API with OAuth2 authentication.",
      openIdConnectUrl:
        'https://dev-whc6jxun.us.auth0.com/.well-known/openid-configuration',
      in: 'header',
      scheme: 'Authorization',
      bearerFormat: 'Bearer',
    })
    .build();

  const swagger = SwaggerModule.createDocument(app, document);
  SwaggerModule.setup('swagger', app, swagger);

  await app.listen(8000);
}
bootstrap();
