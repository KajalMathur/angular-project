import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  token: string;

  constructor() { }

  public getToken(): string {
    if (!this.token)
      this.token = sessionStorage.getItem("token");
    return this.token;
  }

  public setToken(token: string): void {
    this.token = token;
    sessionStorage.setItem("token", token);
  }
}
