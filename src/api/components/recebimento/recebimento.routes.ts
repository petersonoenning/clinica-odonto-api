import { Router } from 'express';
import { RecebimentoController } from './recebimento.controller';

export class RecebimentoRoutes {
  private router: Router = Router();

  private controller: RecebimentoController;

  constructor() {
    this.controller = new RecebimentoController();
    this.init();
  }

  private init(): void {
    this.router.get('/', this.controller.list);
    this.router.post('/', this.controller.create);
    this.router.put('/:codigo', this.controller.update);
    this.router.delete('/:codigo', this.controller.destroy);
    this.router.get('/:codigo', this.controller.show);
  }

  public routes(): Router {
    return this.router;
  }
}
