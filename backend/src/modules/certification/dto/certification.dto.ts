import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCertificationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  issuer: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsOptional()
  credentialId?: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

export class UpdateCertificationDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  issuer?: string;

  @IsString()
  @IsOptional()
  date?: string;

  @IsString()
  @IsOptional()
  credentialId?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
