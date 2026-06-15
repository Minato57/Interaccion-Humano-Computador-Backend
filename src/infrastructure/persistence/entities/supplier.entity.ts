import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { PurchaseOrder } from './purchase-order.entity';

@Entity('suppliers')
export class Supplier {
  @PrimaryGeneratedColumn({ name: 'id_supplier' })
  idSupplier: number;

  @Column({ type: 'character varying', length: 255 })
  name: string;

  @Column({ name: 'contact_email', type: 'character varying', length: 255, nullable: true })
  contactEmail: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
  createdAt: Date;

  @OneToMany(() => PurchaseOrder, (po) => po.supplier)
  purchaseOrders: PurchaseOrder[];
}
