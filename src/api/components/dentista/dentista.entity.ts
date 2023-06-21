import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dentista')
export class Dentista {
  @PrimaryGeneratedColumn()
  id!: number;


  @IsNotEmpty({
    message: 'A propriedade não pode estar vazia!'
  })
  @Column()
  cpf!: string;

  @IsNotEmpty({
    message: 'A propriedade não pode estar vazia!'
  })
  @Column()
  rg!: string;

  @IsNotEmpty({
    message: 'A propriedade não pode estar vazia!'
  })
  @Column()
  nome!: string;
  
  @IsNotEmpty({
    message: 'A propriedade não pode estar vazia!'
  })
  @Column()
  numero_registro!: string;

  @IsNotEmpty({
    message: 'A propriedade não pode estar vazia!'
  })
  @Column()
  especialidade!: string;

  @IsNotEmpty({
    message: 'A propriedade não pode estar vazia!'
  })
  @Column()
  celular!: string;
}