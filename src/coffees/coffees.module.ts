import { Injectable, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Event } from './entities/event.entity';
import { Flavor } from './entities/flavor.entity';
import { COFFEE_BRANDS, COFFEE_BRAND_FACTORY } from './coffees.constants';

class ConfigService {}
class DevConfigService {}
class ProConfigService {}

@Injectable()
export class CoffeeBrandsFactory {
  createBrand() {
    return ['coffee-factory'];
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event]), ConfigModule],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    CoffeeBrandsFactory,
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? DevConfigService
          : ProConfigService,
    },
    {
      provide: COFFEE_BRANDS,
      useValue: ['nestcafe', 'trung nguyen'],
    },
    {
      provide: COFFEE_BRAND_FACTORY,
      useFactory: (brandsFactory: CoffeeBrandsFactory) =>
        brandsFactory.createBrand(),
      inject: [CoffeeBrandsFactory],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
