import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CoffeesService } from './coffees.service';

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
  createOne(@Body() body) {
    return this.coffeeService.createOne(body);
  }
}
