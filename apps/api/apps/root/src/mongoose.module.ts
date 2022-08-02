import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
// import { softDeletePlugin } from '@ultimate/util';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory(configService: ConfigService) {
        console.log(configService.get('root.mongo_uri'));
        return {
          uri               : configService.get('root.mongo_uri'),
          useNewUrlParser   : true,
          useUnifiedTopology: true,
          // useCreateIndex: true,
          // connectionFactory: (connection: Connection) => {
          //   connection.plugin(softDeletePlugin);
          //   return connection;
          // },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class MongooseServiceModule {}
