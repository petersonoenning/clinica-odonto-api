import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('recebimentos')
export class Recebimento {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  data!: Date;

  @Column()
  forma_recebimento!: string;

  @Column()
  status!: number;

  @Column({
    type: 'decimal', 
    transformer: {
      to(value: any) { return value },
      from(value: any) { return parseFloat(value) }
    }
  })
  valor_total!: number;

  @Column()
  consulta_id!: number;
  
}