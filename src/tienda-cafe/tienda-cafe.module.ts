import { Module } from '@nestjs/common';
import { CafeEntity } from '../cafe/cafe.entity';
import { TiendaEntity } from '../tienda/tienda.entity';
import { TiendaCafeService } from './tienda-cafe.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TiendaEntity, CafeEntity])],
  providers: [TiendaCafeService]
})
export class TiendaCafeModule {}
