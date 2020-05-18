export class JWTResponse {

    token?: string;
    loggedInUserId?: string;
    userName?: string;
   
    public constructor(token: string, loggedInUserId: string, userName: string) {
        this.token = token;
        this.loggedInUserId = loggedInUserId;
        this.userName = userName;
    }
}