import {Controller, Get, Post, Put, Delete, Body, Param, NotFoundException,} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  async create(@Body() dto: CreatePaymentDto) {
    const payment = await this.paymentsService.create(dto);
    return new SuccessResponseDto('Payment created successfully', payment);
  }

  @Get()
  async findAll() {
    const payments = await this.paymentsService.findAll();
    return new SuccessResponseDto('Payments retrieved successfully', payments);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const payment = await this.paymentsService.findOne(id);
    if (!payment) throw new NotFoundException('Payment not found');
    return new SuccessResponseDto('Payment retrieved successfully', payment);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdatePaymentDto) {
    const payment = await this.paymentsService.update(id, dto);
    if (!payment) throw new NotFoundException('Payment not found');
    return new SuccessResponseDto('Payment updated successfully', payment);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const payment = await this.paymentsService.remove(id);
    if (!payment) throw new NotFoundException('Payment not found');
    return new SuccessResponseDto('Payment deleted successfully', payment);
  }
}
