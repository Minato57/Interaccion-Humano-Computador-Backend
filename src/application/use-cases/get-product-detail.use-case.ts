import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import type { IProductRepository } from '../../domain/repositories/product.repository.interface';
import { Product } from '../../domain/entities/product.entity';

@Injectable()
export class GetProductDetailUseCase {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: IProductRepository,
  ) {}

  async execute(productIdAlmacen: number, productIdFabrica: string): Promise<Product> {
    const product = await this.productRepository.findById(productIdAlmacen, productIdFabrica);
    if (!product) {
      throw new NotFoundException(
        `Product with Almacen ID ${productIdAlmacen} and Fabrica ID ${productIdFabrica} not found`,
      );
    }
    return product;
  }
}
