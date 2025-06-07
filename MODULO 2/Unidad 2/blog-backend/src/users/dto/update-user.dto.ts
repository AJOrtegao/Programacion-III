import { IsEmail, IsOptional, IsString, MinLength, IsIn } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @MinLength(6)
  @IsString()
  password?: string;

  @IsOptional()
  @IsIn(['customer', 'employee'])
  role?: 'customer' | 'employee';

  @IsOptional()
  @IsString()
  profile?: string;
}
