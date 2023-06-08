import { Router } from 'express';
import { UserRoutes } from './user/user.routes';
import { BaseRoutes } from './base/base.routes';
import { DentistaRoutes } from './dentista/dentista.routes';
import { AgendaRoutes } from './agenda/agenda.routes';
import { ConsultaProcedimentoRoutes } from './consulta_procedimento/consulta_procedimento.routes';
import { ProcedimentoRoutes } from './procedimento/procedimento.routes';

/**
 * Init component routes
 *
 * @param {Router} router
 * @param {string} prefix
 * @returns {void}
 */
export function registerRoutes(router: Router, prefix: string = ''): void {
  router.use(`${prefix}`, new BaseRoutes().routes());
  router.use(`${prefix}/users`, new UserRoutes().routes());
  router.use(`${prefix}/dentista`, new DentistaRoutes().routes());
  router.use(`${prefix}/agenda`, new AgendaRoutes().routes());
  router.use(`${prefix}/consulta_procedimento`, new ConsultaProcedimentoRoutes().routes());
  router.use(`${prefix}/procedimento`, new ProcedimentoRoutes().routes());
}
