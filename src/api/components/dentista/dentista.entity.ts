import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dentista')
export class Dentista {
  @PrimaryGeneratedColumn()
  id!: number;


  @IsNotEmpty({
    message: "não pode ser vazio"
  })
  @Column()
  cpf!: string;

  @IsNotEmpty({
    message: "não pode ser vazio"
  })
  @Column()
  rg!: string;

  @IsNotEmpty({
    message: "não pode ser vazio"
  })
  @Column()
  nome!: string;
  
  @IsNotEmpty({
    message: "não pode ser vazio"
  })
  @Column()
  numero_registro!: string;

  @IsNotEmpty({
    message: "não pode ser vazio"
  })
  @Column()
  especialidade!: string;

  @IsOptional({
    message: "não pode ser vazio"
  })
  @Column()
  celular!: string;
}