import { Component, OnInit } from '@angular/core';
import { CartItem } from '../Module/cart-item';
import { Product } from '../Module/Product';
import { CartItemsService } from '../service/cart-items.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  proList: Product[] = [
    { name: '', id: 1, price: 0, description: '', url: '' },
  ];
  constructor(
    private productService: ProductService,
    private cartService: CartItemsService
  ) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((res) => (this.proList = res));
  }

  addToCart(item: CartItem) {
    this.cartService.addItem(item);
  }
}
