import { Controller, Get } from '@nestjs/common';
import { GetProductTypesUseCase } from '../../application/use-cases/get-product-types.use-case';

@Controller('categories')
export class ProductTypeController {
  constructor(private readonly getProductTypesUseCase: GetProductTypesUseCase) {}

  @Get()
  async getCategories() {
    return this.getProductTypesUseCase.execute();
  }
}
