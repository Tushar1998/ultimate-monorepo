import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { applyLogLevel } from '@ultimate/util';

const logger = new Logger('Root');

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(RootModule);
  const configService = app.get(ConfigService);

  const logLevel: string = configService.get('log.level');

  const httpPort: string = configService.get('http_port');
  app.enableCors();

  const authorizationUrl = `https://${configService.get(
    'auth0.domain',
  )}/authorize?audience=${configService.get('auth0.audience')}`;

  const tokenUrl = `https://${configService.get('auth0.domain')}/oauth/token`;

  // Swagger Documentation
  const document = new DocumentBuilder()
    .setTitle('Ultimate Monorepo Root API')
    .setDescription('Root Microservice to manage requests from admin and web apps')
    .setVersion('1.0')
    .addOAuth2({
      name       : 'oauth2',
      description: "The 'oauth2' scheme is used to secure the API with OAuth2 authentication.",
      type       : 'oauth2',
      flows      : {
        authorizationCode: {
          scopes: {
            openid        : 'openid',
            profile       : 'profile',
            offline_access: 'offline_access',
            name          : 'name',
            given_name    : 'given_name',
            family_name   : 'family_name',
            nickname      : 'nickname',
            email         : 'email',
            email_verified: 'email_verified',
            picture       : 'picture',
            created_at    : 'created_at',
            identities    : 'identities',
            phone         : 'phone',
            address       : 'address',
          },
          authorizationUrl,
          tokenUrl,
        },
      },
    })
    .build();

  const swagger = SwaggerModule.createDocument(app, document);
  SwaggerModule.setup('swagger', app, swagger, {
    swaggerOptions: {
      // persistAuthorization: true,
    },
  });

  await app.listen(httpPort, () => {
    logger.log(`API Server is listenting on port ${httpPort}`);
  });

  app.useLogger(applyLogLevel(logLevel));
}
bootstrap();
