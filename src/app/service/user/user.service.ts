import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from 'src/app/model/Address';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  url = "http://localhost:9098/v1/user";

  constructor(private httpClient: HttpClient) { }

  public createUser(firstName: String, lastName: String, userName: String, password: string, address: Address) {
    const body = {
      'firstName': userName,
      'lastName': lastName,
      'userName': userName,
      'password': password,
      'address': address
    };

    return this.httpClient.post(this.url,body);
  }
}
