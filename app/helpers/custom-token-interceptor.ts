import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';



@Injectable()
export class CustomTokenInterceptor implements HttpInterceptor {
    currentUser: any;

    timer: any;

    constructor(
      // private authService: AuthService
      ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('user') !== null) {
            this.currentUser = JSON.parse(localStorage.getItem('user'));
            console.log('==Header token==', this.currentUser.access_token);
            const accessToken = this.currentUser.access_token;
            request = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + accessToken)
              });
        }

        if (localStorage.getItem('timer') !== null) {
          this.timer = JSON.parse(localStorage.getItem('timer'));
          const current_time = Date.now();
          if (current_time > this.timer) {
            Swal.fire({
              type: 'info',
              title: 'Your session has expired, please log in again!',
              showConfirmButton: true,
              timer: 3000
            });
            // this.authService.logout();
          }
        }

        return next.handle(request);
    }
}
