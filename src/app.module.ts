import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { UsersModule } from './users/users.module';

import databaseConfig from './database/config/database.config';

const infrastructureDatabaseModule = TypeOrmModule.forRootAsync({
  useClass: TypeOrmConfigService,
  dataSourceFactory: async (option: DataSourceOptions) => {
    return new DataSource(option).initialize();
  },
});
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      envFilePath: ['.env'],
    }),

    infrastructureDatabaseModule,

    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
