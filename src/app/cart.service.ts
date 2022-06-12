import { Injectable } from '@angular/core';
import { Product } from './products';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotal() {
    let totalPrice = 0; 
    for (var i = 0; i < this.items.length; i ++) {
      totalPrice += (this.items[i].quantity*this.items[i].price)
    }
    return totalPrice;
  }
}
