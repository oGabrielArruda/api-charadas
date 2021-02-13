import 'dotenv/config';
import express from 'express';

import './config';

import routes from './app/routes';

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        // this.server.use(cors());
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;