import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { CafeEntity } from './cafe.entity';

@Injectable()
export class CafeService {
    constructor(
        @InjectRepository(CafeEntity)
        private readonly cafeRepository: Repository<CafeEntity>
    ){}

    async createCafe(cafe: CafeEntity): Promise<CafeEntity> {
        if (cafe.precio < 0)
            throw new BusinessLogicException("El precio debe ser positivo.", BusinessError.PRECONDITION_FAILED);
        return await this.cafeRepository.save(cafe);
    }
}
