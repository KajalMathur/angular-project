import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:9092/api/products";

  constructor(private httpClient: HttpClient) { }

  public getAllProducts() {
    console.log(this.url)
    return this.httpClient.get(this.url);
  }

  public getProductById(userId: string, sellerDetail: boolean = false) {
    return this.httpClient.get(this.url + "/" + userId + "?" + "sellerDetail=" + sellerDetail);
  }
}
