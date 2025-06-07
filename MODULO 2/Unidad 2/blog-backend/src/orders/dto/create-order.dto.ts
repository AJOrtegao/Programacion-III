import { IsUUID, IsDateString, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  @IsOptional()
  paymentId?: string;

  @IsDateString()
  @IsOptional()
  orderDate?: string;  
}
