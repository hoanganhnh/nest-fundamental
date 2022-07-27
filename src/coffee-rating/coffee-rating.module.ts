import { Module } from '@nestjs/common';

import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeesService } from '../coffees/coffees.service';

@Module({
  imports: [CoffeesService],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
