import { DataOfProducts, } from './data.interface';

export interface WildberriesResponse {
    status: number;
    statusText: string;
    data: DataOfProducts;
}