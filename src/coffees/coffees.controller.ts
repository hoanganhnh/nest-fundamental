import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private coffeeService: CoffeesService) {}
  @Get()
  findAll() {
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(id);
  }

  @Post()
  createOne(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.createOne(createCoffeeDto);
  }
}
