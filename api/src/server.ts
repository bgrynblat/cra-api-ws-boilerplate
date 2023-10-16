import { PORT } from './config';

import app from "./app"

app.listen(PORT)

process.on('SIGINT', (signal) => {
    console.log('SIGINT received');
    process.exit(1);
})