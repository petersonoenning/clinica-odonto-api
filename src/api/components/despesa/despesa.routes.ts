import { Router } from 'express';
import { DespesaController } from './despesa.controller';

export class DespesaRoutes {
  private router: Router = Router();

  private controller: DespesaController;

  constructor() {
    this.controller = new DespesaController();
    this.init();
  }

  private init(): void {
    this.router.get('/', this.controller.list);
    this.router.post('/', this.controller.create);
    //this.router.put('/', this.controller.update);
    //this.router.delete('/', this.controller.destroy);
    //this.router.get('/', this.controller.show);


  }

  public routes(): Router {
    return this.router;
  }
}
