import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { ConsultaProcedimento } from './consulta_procedimento.entity';

export class ConsultaProcedimentoController {
  public async list(req: Request, res: Response) {

    const consultaProcedimento =  await AppDataSource.manager.find(ConsultaProcedimento)

    res.status(200).json({ dados: consultaProcedimento });
  }

  public async create(req: Request, res: Response) {

    let consulta_id = req.body.consulta_id;
    let procedimento_id = req.body.procedimento_id;
    let dente = req.body.dente;
    let quantidade = req.body.quantidade;
    let valor = req.body.valor;

    let cp = new ConsultaProcedimento();
    cp.consulta_id = consulta_id;
    cp.procedimento_id = procedimento_id;
    cp.dente = dente;
    cp.quantidade = quantidade;
    cp.valor = valor;

    const consultaProcedimento_salva = await AppDataSource.manager.save(cp);

    res.status(201).json({consultaProcedimento_salva});
  }
}