
import viewRoutes from './routes/views.routes.js';
import staticRoutes from './routes/static.routes.js';

export const routes = (app) => {

    app.use((request, response, next) => {
        console.log(request.method, request.url);
        next();
    });

    app.get('/ping', (req, res) => {
        res.send('pong');
    });

    app.use(viewRoutes);
    app.use(staticRoutes);
}