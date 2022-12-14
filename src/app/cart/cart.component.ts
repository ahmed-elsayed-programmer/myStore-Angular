import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  addressFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  creditFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]);

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
      this.nameFormControl.valid &&
      this.addressFormControl.valid &&
      this.creditFormControl.valid
    );
  }

  reomove(cart: CartItem) {
    this.cartService.remove(cart.id);
    this.getTotal();
  }

  submit(name: string, address: string, credit: string) {
    if (this.isValid()) {
      this.cartService.clear();
      this.route.navigate(['cart/submit', { name: name, total: this.total }]);
    }
  }

  errorMsg(text: string) {
    return `invalid ${text}`;
  }
}
