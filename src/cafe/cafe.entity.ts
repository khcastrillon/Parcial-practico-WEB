import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TiendaEntity } from '../tienda/tienda.entity';

@Entity()
export class CafeEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;
    
    @Column()
    descripcion: string;
    
    @Column()
    precio: number;

    @ManyToMany(() => TiendaEntity, tienda => tienda.cafes)
    tiendas: TiendaEntity[];
}
