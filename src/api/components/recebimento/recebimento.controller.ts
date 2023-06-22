import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Recebimento } from './recebimento.entity';
import { Consulta } from '../consulta/consulta.entity';

export class RecebimentoController {
  public async list(req: Request, res: Response) {

    const recebimentos = await AppDataSource.manager.find(Recebimento)

    res.status(200).json({ dados: recebimentos, total: recebimentos.length });
  }

  public async create(req: Request, res: Response) {
    
    let { data, forma_recebimento, status, valor_total, consulta_id} = req.body;

    let receb = new Recebimento();
    receb.data = data;
    receb.forma_recebimento = forma_recebimento;
    receb.status = status;
    receb.valor_total = req.body.valor_total;
    receb.consulta = req.body.consulta_id;

    if(receb.consulta == undefined){
      return res.status(404).json({erro: 'Consulta não existe!'})
    }
    const _consulta  = await AppDataSource.manager.findOneBy(Consulta, { id: receb.consulta.id});
    if(_consulta == null)
    {
      return res.status(404).json({erro: 'Consulta não existe!'})
    }

    const _recebimento = await AppDataSource.manager.save(receb);

    res.status(201).json(_recebimento);
  }
  
  
  public async update(req: Request, res: Response){
  
    const { codigo } = req.params;
    // const cod = req.params.codigo;

    // return res.json({ update: true , codigo_enviado: codigo});
    const recebimento = await AppDataSource.manager.findOneBy(Recebimento, { id: parseInt(codigo) });

    if(recebimento == null) {
      return res.status(404).json({ erro: 'Recebimento não encontradao!' });
    }

    let {data, forma_recebimento, status, valor_total, consulta_id} = req.body;

    recebimento.data = data;
    recebimento.forma_recebimento = forma_recebimento;
    recebimento.status = status;
    recebimento.valor_total = valor_total;
    recebimento.consulta = consulta_id;

    const _recebimento = await AppDataSource.manager.save(recebimento);

    return res.json(_recebimento);
  }

  public async destroy(req: Request, res: Response){
  
    
    const { codigo } = req.params;

    const recebimento = await AppDataSource.manager.findOneBy(Recebimento, { id: parseInt(codigo) });

    if(recebimento == null) {
      return res.status(404).json({ erro: 'Recebimento não encontrado!' });
    }

    await AppDataSource.manager.delete(Recebimento, recebimento);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response){
  
    
    const { codigo } = req.params;

    const recebimento = await AppDataSource.manager.findOneBy(Recebimento, { id: parseInt(codigo) });

    if(recebimento == null) {
  
      return res.status(404).json({ erro: 'Recebimento não encontrado!' });
    }
      return res.json(recebimento);
  }
}
