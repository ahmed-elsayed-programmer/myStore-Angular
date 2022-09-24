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
  proList: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((res) => (this.proList = res));
  }

  msg(text: string) {
    alert(text);
  }
}
