import { Module } from '@nestjs/common';
import { CafeService } from './cafe.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CafeEntity } from './cafe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CafeEntity])],
  providers: [CafeService]
})
export class CafeModule {}
