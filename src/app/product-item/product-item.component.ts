import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Module/Product';
import { CartItemsService } from '../service/cart-items.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product?: Product;
  @Input() productId?: number;

  amount: number = 0;
  amountOptions: number[];

  constructor(private cartService: CartItemsService) {
    this.amountOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  ngOnInit(): void {}

  addToCart(amount: number, pro: Product) {
    alert(pro.name + amount);
    this.cartService.addItem({
      id: pro.id,
      name: pro.name,
      url: pro.url,
      price: pro.price,
      count: amount,
    });
  }
}
