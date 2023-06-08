import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Paciente } from './paciente.entity';

export class PacienteController {
  public async list(req: Request, res: Response) {

    const pacientes = await AppDataSource.manager.find(Paciente)

    res.status(200).json({ dados: pacientes });
  }

  public async create(req: Request, res: Response) {
    
    let { nome, cpf, data_nascimento, sexo, endereco, celular, email } = req.body;

    let pac = new Paciente();
    pac.nome = nome;
    pac.cpf = cpf;
    pac.data_nascimento = data_nascimento;
    pac.sexo = sexo;
    pac.endereco = endereco;
    pac.celular = celular;
    pac.email = email;

    const _paciente = await AppDataSource.manager.save(pac);

    res.status(201).json(_paciente);
  }
}
