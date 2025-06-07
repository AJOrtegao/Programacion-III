import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateInvoiceDto {
  @IsInt()
  @IsNotEmpty()
  customerId: number;

  @IsInt()
  @IsNotEmpty()
  employeeId: number;
}
