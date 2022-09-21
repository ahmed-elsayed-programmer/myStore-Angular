import { Injectable } from '@angular/core';
import { Product } from '../Module/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private jsionURL = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsionURL);
  }
}
