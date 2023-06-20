import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Consulta } from '../consulta/consulta.entity';

@Entity('recebimentos')
export class Recebimento {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty({
    message: 'A propriedade data não pode ser vazia'
  })
  @Column()
  data!: Date;

  @IsNotEmpty({
    message: 'A propriedade não pode ser vazia'
  })
  @Column()
  forma_recebimento!: string;

  @IsNotEmpty({
    message: 'A propriedade não pode ser vazia'
  })
  @IsNumber({

  })
  @Column()
  status!: number;

  @IsNotEmpty({
    message: 'A propriedade não pode ser vazia'
  })
  @IsNumber({
    
  })
  @Column({
    type: 'decimal', 
    transformer: {
      to(value: any) { return value },
      from(value: any) { return parseFloat(value) }
    }
  })
  valor_total!: number;

  @ManyToOne(() => Consulta)
  @JoinColumn(
    {
      name: 'consulta_id',
      referencedColumnName: 'id'
    }
  )
  consulta!: Consulta;
  
}