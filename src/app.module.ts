import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TiendaModule } from './tienda/tienda.module';
import { CafeModule } from './cafe/cafe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiendaEntity } from './tienda/tienda.entity';
import { CafeEntity } from './cafe/cafe.entity';
import { TiendaCafeModule } from './tienda-cafe/tienda-cafe.module';

@Module({
  imports: [TiendaModule, CafeModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'cafe',
      entities: [TiendaEntity, CafeEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true
    }),
    TiendaCafeModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
