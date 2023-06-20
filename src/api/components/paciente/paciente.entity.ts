import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('paciente')
export class Paciente {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty({
    message: 'A propriedade nome não pode ser vazia'
  })
  @Column()
  nome!: string;

  @IsNotEmpty({
    message: 'A propriedade cpf não pode ser vazia'
  })
  @Column()
  cpf!: string;

  @IsNotEmpty({
    message: 'A propriedade data não pode ser vazia'
  })
  @IsDateString({ strict: true })
  @Column()
  data_nascimento!: Date;

  @IsNotEmpty({
    message: 'A propriedade sexo não pode ser vazia'
  })
  @Column()
  sexo!: string;

  @IsNotEmpty({
    message: 'A propriedade email não pode ser vazia'
  })
  @Column()
  email!: string;

  @IsNotEmpty({
    message: 'A propriedade endereco não pode ser vazia'
  })
  @Column()
  endereco!: string;

 
  @IsNotEmpty({
    message: 'A propriedade celular não pode ser vazia'
  })
  @Column()
  celular!: string;

}