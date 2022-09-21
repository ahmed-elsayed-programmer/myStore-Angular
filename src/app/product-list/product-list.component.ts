import { Component, OnInit } from '@angular/core';
import { Product } from '../Module/Product';
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
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((res) => (this.proList = res));
  }
}
