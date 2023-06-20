import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('procedimento')
export class Procedimento {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty({
    message: "não pode ser vazio"
  })
  @Column()
  nome!: string;

  @IsOptional({
    message: "não pode ser vazio"
  })
  @Column()
  materiais!: string;

  
  @IsNumber({
  })
  @Column({type: 'decimal', transformer: {
    to(value:any) {return value},
    from(value: any) {return parseFloat(value)}
  }})
  valor!: number;
}