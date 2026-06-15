import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity('product_types')
export class ProductType {
  @PrimaryGeneratedColumn({ name: 'id_product_type' })
  idProductType: number;

  @Column({ name: 'product_type_name', type: 'character varying', length: 255 })
  productTypeName: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp without time zone' })
  updatedAt: Date;

  @OneToMany(() => Product, (product) => product.productType)
  products: Product[];
}
