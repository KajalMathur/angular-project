import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:9092/api/products";

  constructor(private httpClient: HttpClient) { }

  public async getAllProducts() {
    console.log(this.url)
    return await this.httpClient.get(`${this.url}`).toPromise();
  }

  public async getProductById(userId: string, sellerDetail: boolean = false) {
    return await this.httpClient.get('${this.url}/${userId}?sellerDetail=${sellerDetail}').toPromise();
  }
}
