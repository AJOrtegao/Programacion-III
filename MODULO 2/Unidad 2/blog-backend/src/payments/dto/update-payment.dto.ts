import { IsOptional, IsNumber, IsDateString } from 'class-validator';

export class UpdatePaymentDto {
  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsDateString()
  paymentDate?: string;
}
