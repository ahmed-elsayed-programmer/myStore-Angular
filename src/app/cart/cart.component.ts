import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../Module/cart-item';
import { CartItemsService } from '../service/cart-items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  total: number = 0;
  name: string = '';
  address: string = '';
  credit: string = '';

  constructor(public cartService: CartItemsService, private route: Router) {
    this.getTotal();
  }

  ngOnInit(): void {}

  getTotal() {
    this.total = 0;
    this.cartService
      .getItems()
      .forEach((item) => (this.total += item.price * item.count));
  }

  chnageTotal(cart: CartItem, n: number) {
    cart.count = n;
    this.cartService.addItem(cart);
    this.getTotal();
  }

  isValid(): boolean {
    return (
      this.total != 0 &&
      this.name.length > 2 &&
      this.address.length > 6 &&
      this.credit.length > 16
    );
  }

  submit(name: string, address: string, credit: string) {
    alert(this.isValid);
    if (this.isValid()) {
      this.cartService.clear();
      this.route.navigate(['cart/submit', { name: name, total: this.total }]);
    }
  }
}
