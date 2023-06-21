import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Dentista } from '../dentista/dentista.entity';
import { Paciente } from '../paciente/paciente.entity';

@Entity('agenda')
export class Agenda {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty({
    message: 'A propriedade não pode estar vazia!'
  })
  @IsString()
  @Column()
  tipo!: string;

  @IsNotEmpty({
    message: 'A propriedade não pode estar vazia!'
  })
  @IsString()
  @Column()
  hora!: string;

  @IsNotEmpty({
    message: 'A propriedade não pode estar vazia!'
  })
  @IsString()
  @Column()
  data!: string;



  @ManyToOne(() =>  Dentista, { eager: true })
  @JoinColumn({
    name: 'dentista_id',
    referencedColumnName: 'id'
  })
  dentista!: Dentista;

  @ManyToOne(() =>  Paciente, { eager: true })
  @JoinColumn({
    name: 'paciente_id',
    referencedColumnName: 'id'
  })
  paciente!: Paciente;
}