import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TiendaEntity } from '../tienda/tienda.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { CafeEntity } from '../cafe/cafe.entity';

@Injectable()
export class TiendaCafeService {
    constructor(
        @InjectRepository(TiendaEntity)
        private readonly tiendaRepository: Repository<TiendaEntity>,

        @InjectRepository(CafeEntity)
        private readonly cafeRepository: Repository<CafeEntity>
    ){}

    async addSupermarketToCafe(cafeId: string, tiendaId: string): Promise<CafeEntity> {
        const tienda: TiendaEntity = await this.tiendaRepository.findOne({where: {id: tiendaId}});
        if (!tienda)
          throw new BusinessLogicException("The tienda with the given id was not found", BusinessError.NOT_FOUND);
       
        const cafe: CafeEntity = await this.cafeRepository.findOne({where: {id: cafeId}, relations: ["tiendas"]}) 
        if (!cafe)
          throw new BusinessLogicException("The cafe with the given id was not found", BusinessError.NOT_FOUND);
     
        cafe.tiendas = [...cafe.tiendas, tienda];
        return await this.cafeRepository.save(cafe);
    }
}
