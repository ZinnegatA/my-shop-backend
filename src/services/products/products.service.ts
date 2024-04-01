import type { Product } from '../../../types';

export class ProductsService {
  products: Array<Product>;

  constructor() {
    this.products = [
      {
        id: '1',
        brand: 'BMW',
        year: 2008,
        price: 30000,
      },
      {
        id: '2',
        brand: 'Honda',
        year: 2010,
        price: 15000,
      },
      {
        id: '3',
        brand: 'Toyota',
        year: 2013,
        price: 25000,
      },
      {
        id: '4',
        brand: 'Audi',
        year: 2020,
        price: 35000,
      },
    ];
  }

  async getProductsList(): Promise<Product[]> {
    return this.products;
  }

  async getProductsById(id: string): Promise<Product | undefined> {
    for (let product of this.products) {
      if (product.id === id) return product;
    }

    return;
  }
}
