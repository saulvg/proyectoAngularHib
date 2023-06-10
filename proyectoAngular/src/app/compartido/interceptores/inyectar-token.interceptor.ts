import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

//Interceptor para inyectar el token de las cookies en este caso a la cabecera del las peticiones
@Injectable()
export class InyectarTokenInterceptor implements HttpInterceptor {

  constructor(private cookies: CookieService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //Intentamos obter el valor del token y asignarlo a la cabecera en las peticiones, si no... 
    try {
      const token = this.cookies.get('token')
      let newReq = request
      newReq = request.clone(
        {
          setHeaders: {
            authorization: `Bearer ${token}`
          }
        }
      )
      return next.handle(newReq);

    } catch (error) {
      console.error('Error', error);
      return next.handle(request);
    }
  }
}
