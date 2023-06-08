import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Consulta} from './consulta.entity';

export class ConsultaController {
  public async list(req: Request, res: Response) {

    const consultas = await AppDataSource.manager.find(Consulta)

    res.status(200).json({ dados: consultas });
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
}
