import { IsInt, IsNumber } from 'class-validator';

export class CreateInvoiceItemDto {
  @IsInt()
  quantity: number;

  @IsNumber()
  price: number;

  @IsInt()
  productId: number;

  @IsInt()
  invoiceId: number;
}
