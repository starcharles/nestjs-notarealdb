import { IsNumber, IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateAppleDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  variety?: string;

  @IsOptional()
  @IsNumber()
  weight?: number;

  @IsOptional()
  @IsNumber()
  price?: number;
}
