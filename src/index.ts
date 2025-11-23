import express from 'express';
import * as dotenv from 'dotenv';
import notificacionesRoutes from './routes/notificaciones.routes';
import { metricsMiddleware } from './middlewares/metrics.middleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(metricsMiddleware);

app.use('/api/notificaciones', notificacionesRoutes);

app.get('/health', (req, res) => {
    res.json({ 
        status: 'UP',
        service: 'microservicio-notificaciones',
        environment: process.env.NODE_ENV || 'local',
        timestamp: new Date().toISOString()
    });
});

app.get('/', (req, res) => {
    res.json({ 
        message: 'Microservicio de Notificaciones',
        version: '1.0.0'
    });
});

app.listen(PORT, () => {
    console.log(`Microservicio corriendo en puerto ${PORT}`);
});