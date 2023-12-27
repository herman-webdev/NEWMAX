import { NextFunction, Request, Response, } from 'express';
import { wildberriesService, } from '../services/wildberries.service';
import { WildberriesProduct, } from '../services/interfaces/product.interface';
import { config, } from '../config/config';


export class WildberriesController {
	async getData(_req: Request, res: Response<WildberriesProduct[]>, next: NextFunction): Promise<void> {
		try {
		  const url = config.api?.url || '';
		  const stockData = await wildberriesService.getStockData(url, 1197867);
		
		  res.status(200);
		  res.json(stockData);
		} catch (e) {
		  res.status(500);
		  next(e);
		}
	  }
}
