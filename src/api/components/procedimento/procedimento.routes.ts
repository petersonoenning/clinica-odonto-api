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
    this.router.get('/', this.controller.list);
    this.router.post('/', this.controller.create);
    this.router.put('/:cod', this.controller.update);
    this.router.delete('/:cod', this.controller.destroy);
    this.router.get('/:cod', this.controller.show);
  }

  public routes(): Router {
    return this.router;
  }
}