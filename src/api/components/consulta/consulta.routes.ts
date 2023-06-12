import { Router } from 'express';
import { ConsultaController } from './consulta.controller';

export class ConsultaRoutes {
  private router: Router = Router();

  private controller: ConsultaController;

  constructor() {
    this.controller = new ConsultaController();
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
