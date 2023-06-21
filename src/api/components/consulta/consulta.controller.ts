import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Consulta} from './consulta.entity';

export class ConsultaController {
  public async list(req: Request, res: Response) {

    const consultas = await AppDataSource.manager.find(Consulta)

    res.status(200).json({ dados: consultas, total: consultas });
  }

  public async create(req: Request, res: Response) {

    let { data, valor_total, agenda_id, dentista_id, paciente_id} = req.body;

    let cons = new Consulta();
    cons.data = data;
    cons.valor_total = valor_total;
    cons.agenda_id = agenda_id;
    cons.dentista_id = dentista_id;
    cons.paciente_id = paciente_id;

    const _consulta = await AppDataSource.manager.save(cons);

    res.status(201).json(_consulta);
  }
  
  public async update(req: Request, res: Response){
  
    const { codigo } = req.params;
    // const cod = req.params.codigo;

    // return res.json({ update: true , codigo_enviado: codigo});

    const consulta = await AppDataSource.manager.findOneBy(Consulta, { id: codigo });

    if(consulta == null) {
      return res.status(404).json({ erro: 'Consulta não encontrada!' });
    }

    let {data, valor_total, agenda_id, dentista_id, paciente_id} = req.body;

    consulta.data = data;
    consulta.valor_total = valor_total;
    consulta.agenda_id = agenda_id;
    consulta.dentista_id = dentista_id;
    consulta.paciente_id = paciente_id;

    const _consulta = await AppDataSource.manager.save(consulta);

    return res.json(_consulta);
  }

  public async destroy(req: Request, res: Response){
  
    
    const { codigo } = req.params;

    const consulta = await AppDataSource.manager.findOneBy(Consulta, { id: codigo });

    if(consulta == null) {
      return res.status(404).json({ erro: 'Consulta não encontrada!' });
    }

    await AppDataSource.manager.delete(Consulta, consulta);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response){
  
    
    const { codigo } = req.params;

    const consulta = await AppDataSource.manager.findOneBy(Consulta, { id: codigo });

    if(consulta == null) {
      return res.status(404).json({ erro: 'Consulta não encontrada!' });
    }

    return res.json(consulta);
  }
}

