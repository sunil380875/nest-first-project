import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsEnum(['Admin', 'User'], { message: 'role must be Admin or User' })
  role: 'Admin' | 'User';
  id?: number;
}
