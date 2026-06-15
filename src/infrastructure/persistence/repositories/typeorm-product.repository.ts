import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IProductRepository } from '../../../domain/repositories/product.repository.interface';
import { Product as DomainProduct } from '../../../domain/entities/product.entity';
import { Product as OrmProduct } from '../entities/product.entity';

@Injectable()
export class TypeOrmProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(OrmProduct)
    private readonly ormRepository: Repository<OrmProduct>,
  ) {}

  async findAllActive(categoryName?: string): Promise<DomainProduct[]> {
    const where: any = {};
    
    if (categoryName) {
      where.productTypeName = categoryName;
    }

    const ormProducts = await this.ormRepository.find({
      where,
      relations: { productType: true },
    });

    return ormProducts.map((p) => this.toDomain(p));
  }

  async findById(productIdAlmacen: number, productIdFabrica: string): Promise<DomainProduct | null> {
    const ormProduct = await this.ormRepository.findOne({
      where: { productIdAlmacen, productIdFabrica },
      relations: { productType: true },
    });

    return ormProduct ? this.toDomain(ormProduct) : null;
  }

  private toDomain(ormProduct: OrmProduct): DomainProduct {
    const domainProduct = new DomainProduct();
    domainProduct.productIdAlmacen = ormProduct.productIdAlmacen;
    domainProduct.productIdFabrica = ormProduct.productIdFabrica;
    domainProduct.name = ormProduct.name;
    domainProduct.productTypeId = ormProduct.productTypeId;
    domainProduct.productTypeName = ormProduct.productTypeName;
    domainProduct.pricePerMayor = Number(ormProduct.pricePerMayor);
    domainProduct.pricePerMinor = Number(ormProduct.pricePerMinor);
    domainProduct.stock = ormProduct.stock;
    domainProduct.ubicacion = ormProduct.ubicacion;
    domainProduct.createdAt = ormProduct.createdAt;
    domainProduct.isActive = ormProduct.isActive;
    domainProduct.imageUrl = ormProduct.imageUrl;
    domainProduct.stockMinimo = ormProduct.stockMinimo;
    domainProduct.stockVencido = ormProduct.stockVencido;
    domainProduct.stockMalogrado = ormProduct.stockMalogrado;
    domainProduct.stockRoto = ormProduct.stockRoto;

    if (ormProduct.productType) {
      domainProduct.productType = {
        idProductType: ormProduct.productType.idProductType,
        productTypeName: ormProduct.productType.productTypeName,
        createdAt: ormProduct.productType.createdAt,
        updatedAt: ormProduct.productType.updatedAt,
      };
    }

    return domainProduct;
  }
}
