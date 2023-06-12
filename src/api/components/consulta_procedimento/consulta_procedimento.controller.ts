import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { ConsultaProcedimento } from './consulta_procedimento.entity';

export class ConsultaProcedimentoController {
  public async list(req: Request, res: Response) {

    const consultaProcedimento =  await AppDataSource.manager.find(ConsultaProcedimento)

    res.status(200).json({ dados: consultaProcedimento, total: consultaProcedimento.length});
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



  public async update(req: Request, res: Response) {

    // const cod = req.params.cod;
    const { cod } = req.params;

    const consulta_procedimento = await AppDataSource.manager.findOneBy(ConsultaProcedimento, { id: cod });

    if (consulta_procedimento == null) {
      return res.status(404).json({ erro: 'Consulta_Procedimento não encontrada!' });
    }

    let { consulta_id, procedimento_id, dente, quantidade, valor } = req.body;

    consulta_procedimento.consulta_id = consulta_id;
    consulta_procedimento.procedimento_id = procedimento_id;
    consulta_procedimento.dente = dente;
    consulta_procedimento.quantidade = quantidade;
    consulta_procedimento.valor = valor;


    const consulta_proced_salva = await AppDataSource.manager.save(consulta_procedimento);

    return res.json(consulta_proced_salva);
  }



  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const consulta_procedimento = await AppDataSource.manager.findOneBy(ConsultaProcedimento, { id: cod });

    if (consulta_procedimento == null) {
      return res.status(404).json({ erro: 'Consulta_Procedimento não encontrada!' });
    }

    await AppDataSource.manager.delete(ConsultaProcedimento, consulta_procedimento);

    return res.status(204).json();
  }


  public async show(req: Request, res: Response) {
    const { cod } = req.params;

    const consulta_procedimento = await AppDataSource.manager.findOneBy(ConsultaProcedimento, { id: cod });

    if (consulta_procedimento == null) {
      return res.status(404).json({ erro: 'Consulta_Procedimento não encontrada!' });
    }

    return res.json(consulta_procedimento);
  }



}