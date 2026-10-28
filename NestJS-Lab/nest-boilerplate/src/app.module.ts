import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';

import { PostgresDatabaseProviderModule } from '@/providers/database/postgres/provider.module';
import { AppController } from '@/src/app.controller';
import { AppService } from '@/src/app.service';
import global_config from '@/config/global_config';

import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    PostgresDatabaseProviderModule,

    ConfigModule.forRoot({
      isGlobal: true,
      load: [global_config],
    }),

    BullModule.forRoot({
      url: process.env.REDIS_URL,
    }),

    ProductModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}