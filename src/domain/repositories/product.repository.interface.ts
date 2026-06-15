import { Product } from '../entities/product.entity';

export interface IProductRepository {
  findAllActive(categoryName?: string): Promise<Product[]>;
  findById(productIdAlmacen: number, productIdFabrica: string): Promise<Product | null>;
}
