import { Injectable } from '@angular/core';
import { JWTResponse } from 'src/app/model/JWTResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  jWTResponse: JWTResponse

  constructor() { }

  public getSessionInfo(): JWTResponse {
    if (!this.jWTResponse) {
      this.jWTResponse = {};
    }
    if (!this.jWTResponse.token)
      this.jWTResponse.token = sessionStorage.getItem("token");
    if (!this.jWTResponse.loggedInUserId)
      this.jWTResponse.loggedInUserId = sessionStorage.getItem("userId");
    if (!this.jWTResponse.userName)
      this.jWTResponse.userName = sessionStorage.getItem("userName");
    
    return this.jWTResponse;
  }

  public setToken(token: string, userId: string, userName: string): void {
    this.jWTResponse = new JWTResponse(token, userId , userName);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userId", userId);
    sessionStorage.setItem("userName", userName);
  }
}
