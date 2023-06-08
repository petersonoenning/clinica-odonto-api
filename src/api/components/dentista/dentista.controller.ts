import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Dentista } from './dentista.entity';

export class DentistaController {
  public async list(req: Request, res: Response) {

    const dentista =  await AppDataSource.manager.find(Dentista)

    res.status(200).json({ dados: dentista });
  }

  public async create(req: Request, res: Response) {

    let cpf = req.body.cpf;
    let rg = req.body.rg;
    let nome = req.body.nome;
    let numero_registro = req.body.numero_registro;
    let especialidade = req.body.especialidade;
    let celular = req.body.celular;

    let dent = new Dentista();
    dent.cpf = cpf;
    dent.rg = rg;
    dent.nome = nome;
    dent.numero_registro = numero_registro;
    dent.especialidade = especialidade;
    dent.celular = celular;

    const dentista_salvo = await AppDataSource.manager.save(dent);

    res.status(201).json({dentista_salvo});
  }
}
