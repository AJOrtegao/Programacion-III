import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InvoiceItem } from './invoice-item.entity';
import { CreateInvoiceItemDto } from './dto/create-invoice-item.dto';
import { UpdateInvoiceItemDto } from './dto/update-invoice-item.dto';
import { Product } from 'src/products/product.entity';
import { Invoice } from 'src/invoices/invoice.entity';

@Injectable()
export class InvoiceItemsService {
  constructor(
    @InjectRepository(InvoiceItem)
    private invoiceItemRepo: Repository<InvoiceItem>,
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
    @InjectRepository(Invoice)
    private invoiceRepo: Repository<Invoice>,
  ) {}

  async create(dto: CreateInvoiceItemDto): Promise<InvoiceItem> {
    const product = await this.productRepo.findOne({ where: { id: dto.productId } });
    if (!product) throw new Error('Product not found');
    const invoice = await this.invoiceRepo.findOne({ where: { id: dto.invoiceId } });
    if (!invoice) throw new Error('Invoice not found');

    const item = this.invoiceItemRepo.create({
      quantity: dto.quantity,
      price: dto.price,
      product,
      invoice,
    });
    return this.invoiceItemRepo.save(item);
  }

  findAll(): Promise<InvoiceItem[]> {
    return this.invoiceItemRepo.find();
  }

  findOne(id: number): Promise<InvoiceItem | null> {
    return this.invoiceItemRepo.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateInvoiceItemDto): Promise<InvoiceItem> {
    const item = await this.invoiceItemRepo.preload({ id, ...dto });
    if (!item) throw new Error('InvoiceItem not found');
    return this.invoiceItemRepo.save(item);
  }

  async remove(id: number): Promise<void> {
    await this.invoiceItemRepo.delete(id);
  }
}
