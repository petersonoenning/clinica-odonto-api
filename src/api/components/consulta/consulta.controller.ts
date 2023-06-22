import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Consulta} from './consulta.entity';
import { Dentista } from '../dentista/dentista.entity';
import { Agenda } from '../agenda/agenda.entity';
import { Paciente } from '../paciente/paciente.entity';

export class ConsultaController {
  public async list(req: Request, res: Response) {

    const consultas = await AppDataSource.manager.find(Consulta)

      

    res.status(200).json({ dados: consultas, total: consultas.length });
  }

  public async create(req: Request, res: Response) {

    let { data, valor_total, agenda_id, dentista_id, paciente_id} = req.body;

    let cons = new Consulta();
    cons.data = data;
    cons.valor_total = valor_total;
    cons.agenda = req.body.agenda_id;
    cons.dentista = req.body.dentista_id;
    cons.paciente = req.body.paciente_id;

    if(cons.dentista == undefined){
      return res.status(404).json({erro: 'Dentista não existe!'})
    }
    const _dentista  = await AppDataSource.manager.findOneBy(Dentista, { id: cons.dentista.id});
    if(_dentista == null)
    {
      return res.status(404).json({erro: 'Dentista não existe!'})
    }

    if(cons.agenda == undefined){
      return res.status(404).json({erro: 'Agenda não existe!'})
    }
    const _agenda  = await AppDataSource.manager.findOneBy(Agenda, { id: cons.agenda.id});
    if(_agenda == null)
    {
      return res.status(404).json({erro: 'Agenda não existe!'})
    }

    if(cons.paciente == undefined){
      return res.status(404).json({erro: 'Paciente não existe!'})
    }
    const _paciente  = await AppDataSource.manager.findOneBy(Paciente, { id: cons.paciente.id});
    if(_paciente == null)
    {
      return res.status(404).json({erro: 'Paciente não existe!'})
    }

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
    consulta.agenda = req.body.agenda_id;
    consulta.dentista = req.body.dentista_id;
    consulta.paciente = req.body.paciente_id;

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

