
import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Paciente } from '../paciente/paciente.entity';

@Entity('agenda')
export class Agenda {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty({
    message: "não pode ser vazio"
  }
  )
  @Column()
  tipo!: string;


  @IsNotEmpty({
    message: "não pode ser vazio"
  }
  )
  @Column()
  hora!: string;



  @IsNotEmpty({
    message: "não pode ser vazio"
  }
  )
  @Column()
  data!: string;


  @IsNotEmpty({
    message: "não pode ser vazio"
  }
  )
  @Column()
  dentista_id!: number;



  
  @IsNotEmpty({
    message: "não pode ser vazio"
  }
  )
  @Column()
  paciente_id!: number;





  

  /*@IsNotEmpty({
    message: "não pode ser vazio"
  }
  )
  
  @ManyToOne(() => Paciente)
  @JoinColumn(

    {
      name: 'paciente_id',
      referencedColumnName: 'id'
    }
  )
  paciente!: Paciente
  */
}