// src/products/products.controller.ts
import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/all')
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.productsService.findById(+id); // The '+' converts the string id to a number
  }
  @Get()
  findByCategory(@Query('category') categ : string) {
    return this.productsService.findByCategory(categ);
  }

  @Post()
  create(@Body() newProduct: { name: string; price: number , category : string }) {
    return this.productsService.create(newProduct);
  } 
}