import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { PaginationQuery } from './dto/pagiantion-query.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Public } from '../common/decorators/public.decorater';

@Controller('coffees')
export class CoffeesController {
  constructor(private coffeeService: CoffeesService) {}

  @Public()
  @Get()
  findAll(@Query() paginationQuery: PaginationQuery) {
    return this.coffeeService.findAll(paginationQuery);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(id);
  }

  @Post()
  createOne(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.createOne(createCoffeeDto);
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.updateOne(id, updateCoffeeDto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.coffeeService.deleteOne(id);
  }
}
