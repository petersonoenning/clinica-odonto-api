import { Router } from 'express';
import { ProcedimentoController } from './procedimento.controller';

export class ProcedimentoRoutes {
  private router: Router = Router();

  private readonly controller: ProcedimentoController;

  constructor() {
    this.controller = new ProcedimentoController();
    this.init();
  }

  private init(): void {
    this.router.get('/procedimento', this.controller.list);
    this.router.post('/procedimento', this.controller.create);
  }

  public routes(): Router {
    return this.router;
  }
}