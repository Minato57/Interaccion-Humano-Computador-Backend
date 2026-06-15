import { ProductType } from './product-type.entity';

export class Product {
  productIdAlmacen: number;
  productIdFabrica: string;
  name: string;
  productTypeId: number;
  productType?: ProductType;
  productTypeName: string;
  pricePerMayor: number;
  pricePerMinor: number;
  stock: number;
  ubicacion: string;
  createdAt: Date;
  isActive: boolean;
  imageUrl?: string;
  stockMinimo: number;
  stockVencido: number;
  stockMalogrado: number;
  stockRoto: number;
}
