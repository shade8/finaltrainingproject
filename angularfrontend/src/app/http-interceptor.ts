import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
   
    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer YOUR_ACCESS_TOKEN', 
      },
    });

    return next.handle(modifiedReq);
  }
}
