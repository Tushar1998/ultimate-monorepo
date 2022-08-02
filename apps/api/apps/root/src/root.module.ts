import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import RootConfiguration from '../../../config/configuration';
import { join } from 'path';
import { MongooseServiceModule } from './mongoose.module';
import { RestServiceModule } from './rest.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load       : [RootConfiguration],
      isGlobal   : true,
      envFilePath: join(__dirname, '..', '..', '..', '.env'),
    }),
    MongooseServiceModule,
    RestServiceModule,
  ],
  controllers: [],
  providers  : [],
})
export class RootModule {}
