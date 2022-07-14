"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const document = new swagger_1.DocumentBuilder()
        .setTitle('Ultimate Monorepo Root API')
        .setDescription('Root Microservice to manage requests from admin and web apps')
        .setVersion('1.0')
        .addOAuth2({
        type: 'openIdConnect',
        description: "The 'oauth2' scheme is used to secure the API with OAuth2 authentication.",
        openIdConnectUrl: 'https://dev-whc6jxun.us.auth0.com/.well-known/openid-configuration',
        in: 'header',
        scheme: 'Authorization',
        bearerFormat: 'Bearer',
    })
        .build();
    const swagger = swagger_1.SwaggerModule.createDocument(app, document);
    swagger_1.SwaggerModule.setup('swagger', app, swagger);
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map