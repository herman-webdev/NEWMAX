/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/unbound-method */
import { WildberriesController, } from '../controllers/wildberries.controller';
import { Router, } from 'express';

const router: Router = Router();

const wildberriesController = new WildberriesController()

router.get('/data', wildberriesController.getData);
  

export default router