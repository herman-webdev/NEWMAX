export interface WildberriesProduct {
    supplierId: number;
    sizes: Array<{
      name: string;
      origName: string;
      stocks: Array<{
        priority: number;
        qty: number;
        time1: number;
        time2: number;
        wh: number;
      }>;
    }>;
}