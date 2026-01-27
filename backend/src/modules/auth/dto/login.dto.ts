import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'raristides.caamano@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'R1p4.1991!' })
  @IsString()
  @MinLength(6)
  password: string;
}
