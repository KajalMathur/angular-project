import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Address } from 'src/app/model/Address';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  url = "http://localhost:8095/v1/user";

  constructor(private httpClient: HttpClient) { }

  public async createUser(firstName: String, lastName: String, userName: String, password: string, address: Address) {
    const body = {
      'firstName': userName,
      'lastName': lastName,
      'userName': userName,
      'password': password,
      'address': address
    };

    return await this.httpClient.post(`${this.url}`, body).toPromise();
  }
}


