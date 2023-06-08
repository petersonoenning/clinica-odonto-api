import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Recebimento } from './recebimento.entity';

export class RecebimentoController {
  public async list(req: Request, res: Response) {

    const recebimentos = await AppDataSource.manager.find(Recebimento)

    res.status(200).json({ dados: recebimentos });
  }

  public async create(req: Request, res: Response) {
    
    let { data, forma_recebimento, status, valor_total, consulta_id} = req.body;

    let receb = new Recebimento();
    receb.data = data;
    receb.status = status;
    receb.valor_total = valor_total;
    consulta_id = consulta_id;

    const _recebimento = await AppDataSource.manager.save(receb);

    res.status(201).json(_recebimento);
  }
}
