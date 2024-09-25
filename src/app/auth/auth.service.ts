import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
}

@Injectable({providedIn: 'root'})
export class AuthService {

    apiUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBsvu-x7fFjQU9S9nEeV4TCK97LeOwfhdk";

    constructor(private http: HttpClient) {

    }

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(this.apiUrl, {
            email: email,
            password: password,
            returnedSecureToken: true,
        }
    );
    }

}