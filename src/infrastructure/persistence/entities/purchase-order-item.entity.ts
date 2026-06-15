import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PurchaseOrder } from './purchase-order.entity';
import { Product } from './product.entity';

@Entity('purchase_order_items')
export class PurchaseOrderItem {
  @PrimaryGeneratedColumn({ name: 'id_purchase_order_item' })
  idPurchaseOrderItem: number;

  @Column({ name: 'id_purchase_order', type: 'integer' })
  idPurchaseOrder: number;

  @ManyToOne(() => PurchaseOrder, (po) => po.items)
  @JoinColumn({ name: 'id_purchase_order' })
  purchaseOrder: PurchaseOrder;

  @Column({ name: 'product_id_almacen', type: 'integer' })
  productIdAlmacen: number;

  @Column({ name: 'product_id_fabrica', type: 'character varying', length: 255 })
  productIdFabrica: string;

  @ManyToOne(() => Product, (p) => p.purchaseOrderItems)
  @JoinColumn([
    { name: 'product_id_almacen', referencedColumnName: 'productIdAlmacen' },
    { name: 'product_id_fabrica', referencedColumnName: 'productIdFabrica' }
  ])
  product: Product;

  @Column({ type: 'integer' })
  quantity: number;

  @Column({ name: 'unit_price', type: 'numeric', precision: 10, scale: 2 })
  unitPrice: number;
}
