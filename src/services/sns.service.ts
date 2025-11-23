import { PublishCommand } from '@aws-sdk/client-sns';
import { snsClient, config } from '../config/aws';

export class SNSService {
    async enviarNotificacion(
        correo: string,
        folio: string,
        enlaceDescarga: string
    ): Promise<string> {
        const mensaje = `
Estimado cliente,

Se ha generado una nueva nota de venta.

Folio: ${folio}

Puede descargar su nota en el siguiente enlace:
${enlaceDescarga}

Gracias por su preferencia.
        `.trim();

        const command = new PublishCommand({
            TopicArn: config.snsTopicArn,
            Message: mensaje,
            Subject: `Nueva Nota de Venta - Folio ${folio}`
        });

        const response = await snsClient.send(command);

        console.log(`Notificación enviada - Folio: ${folio}, MessageId: ${response.MessageId}`);

        return response.MessageId || '';
    }
}

export const snsService = new SNSService();