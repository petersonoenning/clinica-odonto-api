import { Router } from 'express'; 
import { UserRoutes } from './user/user.routes';
import { BaseRoutes } from './base/base.routes';
import { ConsultaRoutes } from './consulta/consulta.routes';
import { PacienteRoutes } from './paciente/paciente.routes';
import { RecebimentoRoutes } from './recebimento/recebimento.routes';
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
  router.use(`${prefix}/consulta`, new ConsultaRoutes().routes());
  router.use(`${prefix}/paciente`, new PacienteRoutes().routes());
  router.use(`${prefix}/recebimento`, new RecebimentoRoutes().routes());
} 
