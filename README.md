# Microservicio de Notificaciones

Microservicio para envío de notificaciones por correo electrónico usando AWS SNS.

## Tecnologías

- Node.js
- TypeScript
- Express
- AWS SNS

## Prerequisitos

- Node.js 20+
- AWS CLI configurado con credenciales
- SNS Topic configurado

## Instalación
```bash
npm install
```

## Ejecución

### Modo desarrollo
```bash
npm run dev
```

### Modo producción
```bash
npm run build
npm start
```

### Con PM2
```bash
npm run build
pm2 start ecosystem.config.js
```

## Endpoints

### Notificaciones
- POST /api/notificaciones/enviar - Enviar notificación por correo

Request body:
```json
{
  "correo": "cliente@example.com",
  "folio": "NV-1234567890",
  "enlaceDescarga": "http://localhost:3002/api/notas-venta/abc123/pdf"
}
```

### Health Check
- GET /health - Verificar estado del servicio

## Variables de Entorno
```env
PORT=3003
NODE_ENV=development
AWS_REGION=us-east-1
AWS_PROFILE=default
SNS_TOPIC_ARN=arn:aws:sns:us-east-1:799635276007:Examen1_sns
```

## Puerto

El servicio corre en el puerto 3003 por defecto.