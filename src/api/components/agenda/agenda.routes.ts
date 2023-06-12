import { Router } from 'express';
import { AgendaController } from './agenda.controller';

export class AgendaRoutes {
  private router: Router = Router();

  private readonly controller: AgendaController;

  constructor() {
    this.controller = new AgendaController();
    this.init();
  }

  private init(): void {
    this.router.get('/', this.controller.list);
    this.router.post('/', this.controller.create);
  }

  public routes(): Router {
    return this.router;
  }
}