import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { IProductTypeRepository } from '../../../domain/repositories/product-type.repository.interface';
import { ProductType as DomainProductType } from '../../../domain/entities/product-type.entity';
import { ProductType as OrmProductType } from '../entities/product-type.entity';

@Injectable()
export class TypeOrmProductTypeRepository implements IProductTypeRepository {
  constructor(
    @InjectRepository(OrmProductType)
    private readonly ormRepository: Repository<OrmProductType>,
  ) {}

  async findAll(): Promise<DomainProductType[]> {
    const ormProductTypes = await this.ormRepository.find();
    return ormProductTypes.map((pt) => this.toDomain(pt));
  }

  private toDomain(ormProductType: OrmProductType): DomainProductType {
    const domainProductType = new DomainProductType();
    domainProductType.idProductType = ormProductType.idProductType;
    domainProductType.productTypeName = ormProductType.productTypeName;
    domainProductType.createdAt = ormProductType.createdAt;
    domainProductType.updatedAt = ormProductType.updatedAt;
    return domainProductType;
  }
}
