import { Controller, Get, Param, Query } from '@nestjs/common';
import { GetCatalogUseCase } from '../../application/use-cases/get-catalog.use-case';
import { GetProductDetailUseCase } from '../../application/use-cases/get-product-detail.use-case';

@Controller('products')
export class ProductController {
  constructor(
    private readonly getCatalogUseCase: GetCatalogUseCase,
    private readonly getProductDetailUseCase: GetProductDetailUseCase,
  ) {}

  @Get()
  async getCatalog(@Query('category') category?: string) {
    return this.getCatalogUseCase.execute(category);
  }

  @Get(':productIdAlmacen/:productIdFabrica')
  async getProductDetail(
    @Param('productIdAlmacen') productIdAlmacen: string,
    @Param('productIdFabrica') productIdFabrica: string,
  ) {
    return this.getProductDetailUseCase.execute(
      Number(productIdAlmacen),
      productIdFabrica,
    );
  }
}

