import { Module } from '@nestjs/common';

import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeesService } from '../coffees/coffees.service';
import { DatabasesModule } from '../databases/databases.module';

@Module({
  imports: [
    CoffeesService,
    DatabasesModule.register({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
    }),
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
