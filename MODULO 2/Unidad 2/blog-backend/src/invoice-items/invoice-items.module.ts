import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceItem } from './invoice-item.entity';
import { InvoiceItemsService } from './invoice-items.service';
import { InvoiceItemsController } from './invoice-items.controller';
import { Product } from 'src/products/product.entity';
import { Invoice } from 'src/invoices/invoice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceItem, Product, Invoice])],
  controllers: [InvoiceItemsController],
  providers: [InvoiceItemsService],
})
export class InvoiceItemsModule {}
