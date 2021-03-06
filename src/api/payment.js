'use strict';

import { Router } from "express";
import { log } from "../services/middlewares/helper";
import 
{   openLockHandler,
    closeLockHandler,
    getAvailableLocksHandler,
    getMyLocksHandler 
} 
    from '../services/handlers/payment';

export default class LockApi {
    constructor() {
        this.router = Router();
        this.registerRoutes();
    }

    registerRoutes() {
        let router = this.router;
        router.post('/create-customer', log, openLockHandler),
        router.post('/close', log, closeLockHandler ),
        router.get('/available-locks', log, getAvailableLocksHandler ),
        router.get('/get-my-locks', log, getMyLocksHandler )       
    }

    getRouter() {
        return this.router;
    }

    getRouteGroup() {
        return '/payment';
    }
}