import { IsUUID, IsNumber, IsOptional, IsDateString, IsPositive  } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsUUID()
  userId: string;

  @IsUUID()
  @IsOptional()
  orderId?: string;

  @IsDateString()
  @IsOptional()
  paymentDate?: string;
}
