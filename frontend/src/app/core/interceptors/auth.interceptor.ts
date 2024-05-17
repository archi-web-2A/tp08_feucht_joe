import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

  private jwtToken: string = '';

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add authorization header only if the token exists
    if (this.jwtToken) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${this.jwtToken}` }
      });
    }

    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          const authorizationHeader = event.headers.get('Authorization');
          if (authorizationHeader) {
            const token = authorizationHeader.split(/Bearer\s+(.*)$/i)[1];
            if (token) {
              this.jwtToken = token;
            }
          }
        }
      })
    );
  }
}
