import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule  } from "@angular/common/http";
import { Product } from "../models/product";
import { environment } from "../../../environnements/environnement";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendClient + '/products');
  }
}
