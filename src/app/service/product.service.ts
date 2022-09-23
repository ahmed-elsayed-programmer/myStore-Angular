import { Injectable } from '@angular/core';
import { Product } from '../Module/Product';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private jsionURL = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getProduct(id?: number): Observable<Product[]> {
    if (id)
      return this.http
        .get<Product[]>(this.jsionURL)
        .pipe(map((item) => item.filter((i) => i.id === id)));
    return this.http.get<Product[]>(this.jsionURL);
  }
}
