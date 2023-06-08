import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Agenda } from './agenda.entity';

export class AgendaController {
  public async list(req: Request, res: Response) {

    const agenda =  await AppDataSource.manager.find(Agenda)

    res.status(200).json({ dados: agenda });
  }

  public async create(req: Request, res: Response) {

    let tipo = req.body.tipo;
    let hora = req.body.hora;
    let data = req.body.data;
    let dentista_id = req.body.dentista_id;
    let paciente_id = req.body.paciente_id;


    let agd = new Agenda();
    agd.tipo = tipo;
    agd.hora = hora;
    agd.data = data;
    agd.dentista_id = dentista_id;
    agd.paciente_id = paciente_id;

    const agenda_salva = await AppDataSource.manager.save(agd);

    res.status(201).json({agenda_salva});
  }
}
