import 'module-alias/register'
import app from './config/app';
import env from './config/env';

app.listen(env.port, () => console.log(`Running on port: ${env.port}`));