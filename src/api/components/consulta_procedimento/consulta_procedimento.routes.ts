import { Router } from 'express';
import { ConsultaProcedimentoController } from './consulta_procedimento.controller';

export class ConsultaProcedimentoRoutes {
  private router: Router = Router();

  private readonly controller: ConsultaProcedimentoController;

  constructor() {
    this.controller = new ConsultaProcedimentoController();
    this.init();
  }

  private init(): void {
    this.router.get('/consultaProcedimento', this.controller.list);
    this.router.post('/consultaProcedimento', this.controller.create);
  }

  public routes(): Router {
    return this.router;
  }
}