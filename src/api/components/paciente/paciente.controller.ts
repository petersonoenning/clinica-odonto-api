import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Paciente } from './paciente.entity';

export class PacienteController {
  public async list(req: Request, res: Response) {

    const pacientes = await AppDataSource.manager.find(Paciente)

    res.status(200).json({ dados: pacientes, total:pacientes.length });
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

    const erros = await validate(pac);

    if(erros.length > 0) {
      return res.status(400).json(erros);
    }

    const _paciente = await AppDataSource.manager.save(pac);

    res.status(201).json(_paciente);
  }
  public async update(req: Request, res: Response){
  
    const { codigo } = req.params;
    // const cod = req.params.codigo;

    // return res.json({ update: true , codigo_enviado: codigo});

  
    const paciente = await AppDataSource.manager.findOneBy(Paciente, {id: parseInt(codigo) });


    if(paciente == null) {
      return res.status(404).json({ erro: 'Paciente não encontrada!' });
    }

    let {nome, cpf, data_nascimento, sexo, endereco, celular, email} = req.body;
    paciente.nome = nome;
    paciente.cpf = cpf;
    paciente.data_nascimento = data_nascimento;
    paciente.sexo = sexo;
    paciente.endereco = endereco;
    paciente.celular = celular;
    paciente.email = email;

    const _paciente = await AppDataSource.manager.save(paciente);

    return res.json(_paciente);
  }

  public async destroy(req: Request, res: Response){
  
    
    const { codigo } = req.params;

    const paciente = await AppDataSource.manager.findOneBy(Paciente, { id: parseInt(codigo) });

    if(paciente == null) {
      return res.status(404).json({ erro: 'Paciente não encontrado!' });
    }

    await AppDataSource.manager.delete(Paciente, paciente);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response){
  
    
    const { codigo } = req.params;

    const paciente = await AppDataSource.manager.findOneBy(Paciente, { id: parseInt(codigo) });

    if(paciente == null) {
      return res.status(404).json({ erro: 'Paciente não encontrado!' });
    }
    return res.json(paciente);
  }
}
