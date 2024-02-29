import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product";
import { environnement } from "../../../environnements/environnement";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  getProducts() {
    return this.http.get<Product[]>(environnement.backendClient);
  }
}
