import { ProductType } from '../entities/product-type.entity';

export interface IProductTypeRepository {
  findAll(): Promise<ProductType[]>;
}
