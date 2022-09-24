import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Module/Product';
import { CartItemsService } from '../service/cart-items.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product?: Product;
  @Input() productId?: number;

  @Output() addTCart: EventEmitter<string>;

  amount: number = 0;
  amountOptions: number[];
  fullView: boolean = false;

  constructor(
    private cartService: CartItemsService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.amountOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.addTCart = new EventEmitter<string>();
  }

  ngOnInit(): void {
    if (!this.productId) {
      this.productId = Number(this.route.snapshot.paramMap.get('productId'));
      this.fullView = true;
    }

    if (this.fullView) {
      this.productService
        .getitem(this.productId)
        .subscribe((item) =>
          item.length !== 0 ? (this.product = item[0]) : undefined
        );
    }

    if (this.cartService.cart.has(this.productId)) {
      this.cartService
        .getItems()
        .forEach((value) => (this.amount = value.count));
    }
  }

  addToCart(amount: number, pro: Product) {
    this.cartService.addItem({
      id: pro.id,
      name: pro.name,
      url: pro.url,
      price: pro.price,
      count: amount,
    });
    this.addTCart.emit(this.product?.name + ' add to cart');
  }

  reomveFromCart(id: number) {
    this.cartService.remove(id);
  }
}
