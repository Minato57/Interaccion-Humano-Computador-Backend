import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Supplier } from './supplier.entity';
import { PurchaseOrderItem } from './purchase-order-item.entity';

@Entity('purchase_orders')
export class PurchaseOrder {
  @PrimaryGeneratedColumn({ name: 'id_purchase_order' })
  idPurchaseOrder: number;

  @Column({ name: 'id_supplier', type: 'integer' })
  idSupplier: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.purchaseOrders)
  @JoinColumn({ name: 'id_supplier' })
  supplier: Supplier;

  @Column({ type: 'character varying', length: 50, default: 'EN_TRANSITO' })
  status: string;

  @Column({ name: 'fecha_estimada_llegada', type: 'date' })
  fechaEstimadaLlegada: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
  createdAt: Date;

  @OneToMany(() => PurchaseOrderItem, (item) => item.purchaseOrder)
  items: PurchaseOrderItem[];
}
