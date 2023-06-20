import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Agenda } from './agenda.entity';

export class AgendaController {
  public async list(req: Request, res: Response) {

    const agenda =  await AppDataSource.manager.find(Agenda)

    res.status(200).json({ dados: agenda, total: agenda.length});
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


    const erros = await validate(agd);

    if(erros.length > 0) {
      return res.status(400).json(erros);
    }
    const agenda_salva = await AppDataSource.manager.save(agd);

    res.status(201).json({agenda_salva});
  }


  public async update(req: Request, res: Response) {
    const { cod } = req.params;
  
    const agenda = await AppDataSource.manager.findOneBy(Agenda, { id: parseInt(cod) });
  
    if (agenda == null) {
      return res.status(404).json({ erro: 'Agenda não encontrada!' });
    }
  
    let { tipo, hora, data, dentista_id, paciente_id } = req.body;
  
    agenda.tipo = tipo;
    agenda.hora = hora;
    agenda.data = data;
    agenda.dentista_id = dentista_id;
    agenda.paciente_id = paciente_id;
  


    const erros = await validate(agenda);

    if(erros.length > 0) {
      return res.status(400).json(erros);
    }


    const agenda_salvo = await AppDataSource.manager.save(agenda);
  
    return res.json(agenda_salvo);
  }
  

  public async destroy(req: Request, res: Response){
  
    
    const cod = req.params.cod;

    const agenda = await AppDataSource.manager.findOneBy(Agenda, { id: parseInt(cod) });

    if(agenda == null) {
      return res.status(404).json({ erro: 'Agenda não encontrada!' });
    }

    await AppDataSource.manager.delete(Agenda, agenda);

    return res.status(204).json();
  }


  public async show(req: Request, res: Response){
  
    
    const cod = req.params.cod;

    const agenda = await AppDataSource.manager.findOneBy(Agenda, { id: parseInt(cod) });

    if(agenda == null) {
      return res.status(404).json({ erro: 'Agenda não encontrada!' });
    }

    return res.json(agenda);
  }
}

