import { Component, OnInit } from '@angular/core';
import { CartItem } from '../Module/cart-item';
import { CartItemsService } from '../service/cart-items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  item: CartItem[] = [];

  constructor(private cartService: CartItemsService) {}

  ngOnInit(): void {
    this.item = this.cartService.getItems();
  }
}
