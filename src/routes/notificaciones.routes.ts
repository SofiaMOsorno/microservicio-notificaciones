import { Router } from 'express';
import { notificacionesController } from '../controllers/notificaciones.controller';

const router = Router();

router.post('/enviar', (req, res) => notificacionesController.enviar(req, res));

export default router;