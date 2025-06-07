import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/products/product.entity';
import { Invoice } from 'src/invoices/invoice.entity';
@Entity()
export class InvoiceItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @ManyToOne(() => Invoice, invoice => invoice.items)
  invoice: Invoice;
}
