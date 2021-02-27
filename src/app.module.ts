import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getMetadataArgsStorage } from 'typeorm';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

// @ts-ignore
import apprc from '../.apprc';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...apprc.db,
      entities: getMetadataArgsStorage().tables.map((table) => table.target),
      keepConnectionAlive: true,
      synchronize: true,
    } as TypeOrmModuleOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
