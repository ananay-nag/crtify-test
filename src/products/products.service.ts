// src/products/products.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';

// In a real app, this would be a database connection.
// For this example, we'll use a simple array.
const PRODUCTS = [
{ id: 1, name: 'Keyboard', price: 1999, category: 'accessories' },
{ id: 2, name: 'Mouse', price: 1299, category: 'accessories' },
{ id: 3, name: 'Monitor', price: 12999, category: 'display' }
]

@Injectable()
export class ProductsService {
  findAll() {
    return PRODUCTS;
  }

  findById(id: number) {
    let product = PRODUCTS.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException();
      // return "product not available!"
    }
    return product;
  }

  findByCategory (categ: string) {
    console.log(categ);
    let item = PRODUCTS.filter((product) => product.category === categ );
    if(!item){
      throw new NotFoundException();
    }
    return item;
  }

  create(newProduct: { name: string; price: number, category: string }) {
    const newId = PRODUCTS.length + 1;
    const product = { id: newId, ...newProduct };
    PRODUCTS.push(product);
    return product;
  }
}
