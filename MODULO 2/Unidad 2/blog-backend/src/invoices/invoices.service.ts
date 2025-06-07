import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from './invoice.entity';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepo: Repository<Invoice>,
  ) {}

  findAll() {
    return this.invoiceRepo.find({ relations: ['customer', 'employee', 'items'] });
  }

  findOne(id: number) {
    return this.invoiceRepo.findOne({ where: { id }, relations: ['customer', 'employee', 'items'] });
  }

  create(data: Partial<Invoice>) {
    const invoice = this.invoiceRepo.create(data);
    return this.invoiceRepo.save(invoice);
  }
}
