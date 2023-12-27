import { WildberriesProduct, } from 'services/interfaces/product.interface';

export function filterProductsBySupplierId(products: WildberriesProduct[], targetSupplierId: number): WildberriesProduct[] {
	const filteredArray = products.filter((obj) => obj.supplierId === targetSupplierId);

	const filteredSizes = filteredArray.map(obj => ({
		supplierId: obj.supplierId,
		sizes: obj.sizes.map(size => ({
			name: size.name,
			origName: size.origName,
			stocks: size.stocks,
		})),
	}));

	return filteredSizes;
}