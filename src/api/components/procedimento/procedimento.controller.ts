import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Procedimento } from './procedimento.entity';

export class ProcedimentoController {
  public async list(req: Request, res: Response) {

    const procedimento =  await AppDataSource.manager.find(Procedimento)

    res.status(200).json({ dados: procedimento });
  }

  public async create(req: Request, res: Response) {

    let nome = req.body.nome;
    let materiais = req.body.materiais;
    let valor = req.body.valor;

    let proc = new Procedimento();
    proc.nome = nome;
    proc.materiais = materiais;
    proc.valor = valor;

    const procedimento_salvo = await AppDataSource.manager.save(proc);

    res.status(201).json({procedimento_salvo});
  }
}
