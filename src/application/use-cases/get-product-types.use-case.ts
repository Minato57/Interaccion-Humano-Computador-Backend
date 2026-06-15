import { Injectable, Inject } from '@nestjs/common';
import type { IProductTypeRepository } from '../../domain/repositories/product-type.repository.interface';
import { ProductType } from '../../domain/entities/product-type.entity';

@Injectable()
export class GetProductTypesUseCase {
  constructor(
    @Inject('IProductTypeRepository')
    private readonly productTypeRepository: IProductTypeRepository,
  ) {}

  async execute(): Promise<ProductType[]> {
    return this.productTypeRepository.findAll();
  }
}
