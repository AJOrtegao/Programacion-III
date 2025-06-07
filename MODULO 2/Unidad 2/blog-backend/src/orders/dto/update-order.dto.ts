import { IsDateString, IsOptional } from 'class-validator';

export class UpdateOrderDto {
  @IsDateString()
  @IsOptional()
  orderDate?: string;
}