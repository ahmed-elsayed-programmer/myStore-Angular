import { Injectable } from '@angular/core';
import { CartItem } from '../Module/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartItemsService {
  cart: CartItem[] = [];

  constructor() {}

  getItems() {
    return this.cart;
  }

  addItem(item: CartItem) {
    this.cart.push(item);
  }
}
