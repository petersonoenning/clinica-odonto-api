import { Router } from 'express';
import { PacienteController } from './paciente.controller';

export class PacienteRoutes {
  private router: Router = Router();

  private controller: PacienteController;

  constructor() {
    this.controller = new PacienteController();
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
