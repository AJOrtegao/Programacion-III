import {
  Controller, Get, Post, Put, Delete,
  Param, Body, NotFoundException
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() dto: CreateOrderDto) {
    const order = await this.ordersService.create(dto);
    return new SuccessResponseDto('Order created successfully', order);
  }

  @Get()
  async findAll() {
    const orders = await this.ordersService.findAll();
    return new SuccessResponseDto('Orders retrieved successfully', orders);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const order = await this.ordersService.findOne(id);
    if (!order) throw new NotFoundException('Order not found');
    return new SuccessResponseDto('Order retrieved successfully', order);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateOrderDto) {
    const order = await this.ordersService.update(id, dto);
    if (!order) throw new NotFoundException('Order not found');
    return new SuccessResponseDto('Order updated successfully', order);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const order = await this.ordersService.remove(id);
    if (!order) throw new NotFoundException('Order not found');
    return new SuccessResponseDto('Order deleted successfully', order);
  }
}
