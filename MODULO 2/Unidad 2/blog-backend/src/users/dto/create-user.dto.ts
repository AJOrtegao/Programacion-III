import { IsString, IsEmail, IsNotEmpty, MinLength, IsIn, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  @IsString()
  password: string;

  @IsIn(['customer', 'employee'])
  role: 'customer' | 'employee';

  @IsOptional()
  @IsString()
  profile?: string; // Este campo es opcional según tu entidad
}
