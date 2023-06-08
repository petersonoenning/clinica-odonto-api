import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('consulta')
export class Consulta {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  data!: Date;

  @Column({
    type: 'decimal', 
    transformer: {
      to(value: any) { return value },
      from(value: any) { return parseFloat(value) }
    }
  })
  valor_total!: number;

  @Column()
  agenda_id!: number;

  @Column()
  dentista_id!: number;

  @Column()
  paciente_id!: number;

  
}