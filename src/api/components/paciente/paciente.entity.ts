import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('paciente')
export class Paciente {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  cpf!: string;

  @Column()
  data_nascimento!: Date;

  @Column()
  sexo!: string;

  @Column()
  email!: string;

  @Column()
  endereco!: string;

  @Column()
  celular!: string;

}