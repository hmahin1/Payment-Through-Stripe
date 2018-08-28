'use strict';

import {Router} from "express";
import {log} from "../services/middlewares/helper";
import {register} from '../services/handlers/auth';

export default class HomeAPI {
    constructor() {
        this.router = Router();
        this.registerRoutes();
    }

    registerRoutes() {
        let router = this.router;
        router.post('/register', log, register)
    }

    getRouter() {
        return this.router;
    }

    getRouteGroup() {
        return '/auth';
    }
}