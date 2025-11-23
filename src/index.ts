import express from 'express';
import * as dotenv from 'dotenv';
import notificacionesRoutes from './routes/notificaciones.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.use('/api/notificaciones', notificacionesRoutes);

app.get('/health', (req, res) => {
    res.json({ 
        status: 'UP',
        service: 'microservicio-notificaciones',
        timestamp: new Date().toISOString()
    });
});

app.get('/', (req, res) => {
    res.json({ 
        message: 'Microservicio de Notificaciones - API REST',
        version: '1.0.0',
        endpoints: {
            notificaciones: '/api/notificaciones/enviar',
            health: '/health'
        }
    });
});

app.listen(PORT, () => {
    console.log(`Microservicio de Notificaciones corriendo en http://localhost:${PORT}`);
    console.log(`Documentación: http://localhost:${PORT}/`);
    console.log(`Health Check: http://localhost:${PORT}/health`);
});