import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dentista')
export class Dentista {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty({
    message: 'A propriedade não pode estar vazia!'
  })
  @IsString()
  @Column()
  cpf!: string;

  @IsNotEmpty({
    message: 'A propriedade não pode estar vazia!'
  })
  @IsString()
  @Column()
  rg!: string;

  @IsNotEmpty({
    message: 'A propriedade não pode estar vazia!'
  })
  @IsString()
  @Column()
  nome!: string;

  @IsNotEmpty({
    message: 'A propriedade não pode estar vazia!'
  })
  @IsString()
  @Column()
  numero_registro!: string;

  @IsNotEmpty({
    message: 'A propriedade não pode estar vazia!'
  })
  @IsString()
  @Column()
  especialidade!: string;

  @IsNotEmpty({
    message: 'A propriedade não pode estar vazia!'
  })
  @IsString()
  @Column()
  celular!: string;
}