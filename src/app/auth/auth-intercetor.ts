import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { exhaustMap, take } from "rxjs/operators";

@Injectable()
export class AuthIntercepterService implements HttpInterceptor {
    constructor(private authService: AuthService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                if (user === null) {
                    return next.handle(req);
                } else {
                    const modifiedReq = req.clone({params: new HttpParams().set("auth", String(user.token))})
                    return next.handle(modifiedReq);
                }
            })
        )
    }

}