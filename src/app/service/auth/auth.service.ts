import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public async authenticateUser(userName: string, password: string) {
    const body = {
      'userName': userName,
      'password': password
    };

    return this.httpClient.post('http://localhost:8080/v1/authenticate', body);
  }
}
