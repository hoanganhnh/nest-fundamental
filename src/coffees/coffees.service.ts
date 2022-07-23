import { Injectable } from '@nestjs/common';

import Coffee from './coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: '1',
      name: 'A',
    },
    {
      id: '2',
      name: 'B',
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find((item) => item.id === id);
  }

  createOne(createCoffeeDto: CreateCoffeeDto) {
    return this.coffees.push(createCoffeeDto);
  }

  updateOne(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = this.findOne(id);
    if (coffee) {
      // update
      console.log(updateCoffeeDto);
    }
  }

  deleteOne(id: string) {
    const indexCoffee = this.coffees.findIndex((item) => item.id === id);
    if (indexCoffee >= 0) {
      this.coffees.slice(indexCoffee, 1);
    }
  }
}
