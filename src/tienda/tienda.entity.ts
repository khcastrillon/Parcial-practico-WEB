import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { CafeEntity } from '../cafe/cafe.entity';

@Entity()
export class TiendaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;
    
    @Column()
    direccion: string;
    
    @Column()
    telefono: string;

    @ManyToMany(() => CafeEntity, cafe => cafe.tiendas)
    @JoinColumn()
    cafes: CafeEntity[];
}
