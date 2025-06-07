import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { User } from '../users/user.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(dto: CreateOrderDto): Promise<Order> {
    const user = await this.userRepo.findOne({ where: { id: dto.userId } });
    if (!user) throw new NotFoundException('User not found');

    const order = this.orderRepo.create({
      orderDate: dto.orderDate,
      user,
      payment: dto.paymentId ? { id: dto.paymentId } : null,
    });

    return await this.orderRepo.save(order);
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepo.find({ relations: ['user', 'payment'] });
  }

  async findOne(id: string): Promise<Order | null> {
    return this.orderRepo.findOne({ where: { id }, relations: ['user', 'payment'] });
  }

  async update(id: string, dto: UpdateOrderDto): Promise<Order | null> {
    const order = await this.findOne(id);
    if (!order) return null;

    if (dto.orderDate) order.orderDate = new Date(dto.orderDate);

    return this.orderRepo.save(order);
  }

  async remove(id: string): Promise<Order | null> {
    const order = await this.findOne(id);
    if (!order) return null;

    return this.orderRepo.remove(order);
  }
}
