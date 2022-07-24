import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly branch: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
