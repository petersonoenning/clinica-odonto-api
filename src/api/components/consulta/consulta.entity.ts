import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Agenda } from '../agenda/agenda.entity';
import { Dentista } from '../dentista/dentista.entity';
import { Paciente } from '../paciente/paciente.entity';

@Entity('consulta')
export class Consulta {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty({
    message: 'A propriedade data não pode ser vazia'
  })
  @IsNumber({
  })
  @Column()
  data!: Date;

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

  @ManyToOne(() => Agenda, {eager: true})
  @JoinColumn(
    {
      name: 'agenda_id',
      referencedColumnName: 'id'
    }
  )
  agenda!: Agenda;

  @ManyToOne(() => Dentista, {eager: true})
  @JoinColumn(
    {
      name: 'dentista_id',
      referencedColumnName: 'id'
    }
  )
  dentista!: Dentista;

  @ManyToOne(() => Paciente, {eager: true})
  @JoinColumn(
    {
      name: 'paciente_id',
      referencedColumnName: 'id'
    }
  )
  paciente!: Paciente;
}