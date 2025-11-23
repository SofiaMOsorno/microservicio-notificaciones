import { Request, Response } from 'express';
import { snsService } from '../services/sns.service';
import { NotificacionRequest } from '../models/index';

export class NotificacionesController {
    async enviar(req: Request, res: Response) {
        try {
            const { correo, folio, enlaceDescarga }: NotificacionRequest = req.body;

            if (!correo || !folio || !enlaceDescarga) {
                return res.status(400).json({ 
                    error: 'Faltan campos obligatorios',
                    campos_requeridos: ['correo', 'folio', 'enlaceDescarga']
                });
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(correo)) {
                return res.status(400).json({ 
                    error: 'Correo electrónico inválido',
                    detalle: 'Proporciona un correo electrónico válido'
                });
            }

            const messageId = await snsService.enviarNotificacion(correo, folio, enlaceDescarga);

            res.status(200).json({ 
                success: true,
                message: 'Notificación enviada exitosamente',
                messageId
            });
        } catch (error) {
            console.error('Error al enviar notificación:', error);
            res.status(500).json({ 
                error: 'Error interno del servidor al enviar notificación',
                detalle: 'Por favor intente nuevamente más tarde'
            });
        }
    }

    async health(req: Request, res: Response) {
        try {
            res.json({ 
                status: 'UP',
                service: 'microservicio-notificaciones',
                snsConfigured: !!process.env.SNS_TOPIC_ARN,
                timestamp: new Date().toISOString()
            });
        } catch (error) {
            res.status(500).json({ 
                status: 'DOWN',
                error: 'Error al verificar salud del servicio'
            });
        }
    }
}

export const notificacionesController = new NotificacionesController();