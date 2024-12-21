import express from 'express';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import { routes } from './routes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);

const STATIC_FILES_PATH = path.join(__dirname, 'public');
const VIEWS_PATH = path.join(__dirname, 'views');

app.use(bodyParser.json());
app.use('/public', express.static(STATIC_FILES_PATH));
app.use(express.urlencoded({ extended: true }));

app.set('views', VIEWS_PATH);
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3123;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

routes(app);