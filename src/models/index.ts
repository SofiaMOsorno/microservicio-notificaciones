export interface NotificacionRequest {
    correo: string;
    folio: string;
    enlaceDescarga: string;
}

export interface NotificacionResponse {
    success: boolean;
    message: string;
    messageId?: string;
}