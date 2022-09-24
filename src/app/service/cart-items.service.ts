import { Injectable } from '@angular/core';
import { CartItem } from '../Module/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartItemsService {
  cart: Map<number, CartItem>;

  constructor() {
    this.cart = new Map<number, CartItem>();
  }

  getItems(): Map<number, CartItem> {
    return this.cart;
  }

  clear() {
    this.cart.clear();
  }

  addItem(item: CartItem) {
    if (item.count > 0) this.cart.set(item.id, item);
  }

  remove(id: number) {
    if (this.cart.has(id)) {
      this.cart.delete(id);
    }
  }
}
