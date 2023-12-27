import axios, { AxiosResponse, } from 'axios';
import { filterProductsBySupplierId, } from './helpers/filter.helper';
import { WildberriesProduct, } from './interfaces/product.interface';
import { WildberriesResponse, } from './interfaces/response.interface';
import { DataOfProducts, } from './interfaces/data.interface';

class WildberriesService {
	async getStockData(url: string, cityId: number): Promise<WildberriesProduct[]> {
		try {
			const response: AxiosResponse = await axios.get(url, {
				headers: {
				  'User-Agent': 'Lets find out!',
				},
			  });

			  const extractedData: WildberriesResponse = {
				status: response.status,
				statusText: response.statusText,
				data: response.data as DataOfProducts,
			  };

			  const sortedData = filterProductsBySupplierId(extractedData.data.data.products, cityId);

			  return sortedData;
		} catch(e) {
			throw new Error('Error fetching data as stocks from Wildberries');
		}
	}
}

export const wildberriesService = new WildberriesService()