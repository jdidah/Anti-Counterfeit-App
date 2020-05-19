import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { AuthService } from '../services/auth.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
      // private authService: AuthService
      ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
            }
            if (err.status === 403) {
              // this.authService.logout();
            }
            console.log(err);

            const error = err.error.description || err.error.error_description || err.error.message || err.statusText || err.error;
            console.log('checking error ', error);
            return throwError(error);
        }));
    }
}
