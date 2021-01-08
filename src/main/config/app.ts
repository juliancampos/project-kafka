import express from 'express'
import { setupRoutes } from './routes';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json({}))
setupRoutes(app);

export default app;