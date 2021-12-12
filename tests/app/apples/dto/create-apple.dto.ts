import { IsNumber, IsString } from 'class-validator';

export class CreateAppleDto {

  @IsString()
  variety: string;

  @IsNumber()
  weight: number;

  @IsNumber()
  price: number;
}
