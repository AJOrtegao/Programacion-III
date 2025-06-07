import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { User } from '../users/user.entity';
import { Order } from '../orders/order.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepo: Repository<Payment>,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
  ) {}

  async create(dto: CreatePaymentDto): Promise<Payment> {
    const user = await this.userRepo.findOne({ where: { id: dto.userId } });
    if (!user) throw new NotFoundException('User not found');

    let order: Order | null = null;
    if (dto.orderId) {
      order = await this.orderRepo.findOne({ where: { id: dto.orderId } });
      if (!order) throw new NotFoundException('Order not found');
    }

    const payment = this.paymentRepo.create({
      amount: dto.amount,
      paymentDate: dto.paymentDate ? new Date(dto.paymentDate) : new Date(),
      user,
      ...(order ? { orders: [order] } : {}),
    });

    return await this.paymentRepo.save(payment);
  }

  async findAll(): Promise<Payment[]> {
    return this.paymentRepo.find({ relations: ['user', 'order'] });
  }

  async findOne(id: string): Promise<Payment | null> {
    return this.paymentRepo.findOne({ where: { id }, relations: ['user', 'order'] });
  }

  async update(id: string, dto: UpdatePaymentDto): Promise<Payment | null> {
    const payment = await this.findOne(id);
    if (!payment) return null;

    if (dto.amount !== undefined) payment.amount = dto.amount;
    if (dto.paymentDate) payment.paymentDate = new Date(dto.paymentDate);

    return this.paymentRepo.save(payment);
  }

  async remove(id: string): Promise<Payment | null> {
    const payment = await this.findOne(id);
    if (!payment) return null;

    return this.paymentRepo.remove(payment);
  }
}
