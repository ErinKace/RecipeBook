import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";

export interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean,
}

@Injectable({providedIn: 'root'})
export class AuthService {
    user = new BehaviorSubject<User | null>(null);

    apiUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:";

    apiKey: string = "AIzaSyBsvu-x7fFjQU9S9nEeV4TCK97LeOwfhdk";

    // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
    // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

    constructor(private http: HttpClient, private router: Router) {

    }

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>((this.apiUrl+"signUp?key="+this.apiKey), {
            email: email,
            password: password,
            returnedSecureToken: true,
        }
    ).pipe(catchError(this.handleError), tap(resData => {
        console.log(resData);
this.handleUser(resData.email, resData.localId, resData.idToken, Number(resData.expiresIn))
    }));
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>((this.apiUrl+"signInWithPassword?key="+this.apiKey), {
            email: email,
            password: password,
            returnedSecureToken: true,
        }
    ).pipe(catchError(this.handleError), tap(resData => {
        // console.log("Expires In from Firebase: "+resData.expiresIn);
        this.handleUser(resData.email, resData.localId, resData.idToken, Number(resData.expiresIn));
            }));
    }

    handleError(errorRes: HttpErrorResponse) {
            let errorMessage = 'An unkown error occurred.';
            if (!errorRes.error || !errorRes.error.error) {
                return throwError(errorMessage);
            } else {
                switch (errorRes.error.error.message) {
                    case 'EMAIL_EXISTS':
                        errorMessage = "An account accociated with this email already exists."
                        break;
                    case 'EMAIL_NOT_FOUND':
                        errorMessage = "An account with this email was not found."
                        break;
                    case 'INVALID_PASSWORD':
                        errorMessage = "Your credentials do not match. Check your password and try again."
                        break;

                    case 'INVALID_LOGIN_CREDENTIALS':
                        errorMessage = "Your credentials do not match."
                        break;
                }
            }
            return throwError(errorMessage);
    }

    private handleUser(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
        // console.log("Expires in convereted: "+expirationDate);
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    autoLogin() {
        const userData = localStorage.getItem('userData');
        if (!userData) {
            return;
        }
        const formattedData: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string,

        } = JSON.parse(userData);
        const loadedUser = new User(formattedData.email, formattedData.id, formattedData._token, new Date(formattedData._tokenExpirationDate));
        if (loadedUser.token) {
            this.user.next(loadedUser);
        }
        

    }

    logout() {
        this.user.next(null);
        this.router.navigate(['/auth']);
    }

}