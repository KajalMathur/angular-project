import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { LoginPageService } from 'src/app/service/angular-service/LoginPage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:8095/api/products";

  constructor(private httpClient: HttpClient, private loginPageService: LoginPageService) { }

  public async getAllProducts() {
    let header = new HttpHeaders().set(
      "Authorization",
      'Bearer ' + this.loginPageService.getToken());
    return await this.httpClient.get(`${this.url}`, {headers:header}).toPromise();
  }

  public async getProductById(userId: string, sellerDetail: boolean = false) {

    let header = new HttpHeaders().set(
      "Authorization",
      'Bearer ' + this.loginPageService.getToken());
    return await this.httpClient.get(`${this.url}/${userId}?sellerDetail=${sellerDetail}`, {headers:header}).toPromise();
  }
}
