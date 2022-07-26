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
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { PaginationQuery } from './dto/pagiantion-query.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Public } from '../common/decorators/public.decorator';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';

ApiTags('coffees');
@Controller('coffees')
export class CoffeesController {
  constructor(private coffeeService: CoffeesService) {}

  @Public()
  @Get()
  findAll(@Query() paginationQuery: PaginationQuery) {
    // test request timeout
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return this.coffeeService.findAll(paginationQuery);
  }

  @ApiResponse({
    status: 200,
    description: 'Find one coffee',
  })
  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.coffeeService.findOne(id);
  }

  @ApiForbiddenResponse({ description: 'This is only for Admin' })
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
