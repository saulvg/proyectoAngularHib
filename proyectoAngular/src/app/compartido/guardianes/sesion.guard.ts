import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

//Middleware para revisar si tienes token o no en este caso solo lo usamos para dejarte o no ir a la pagina de autenticacion
//app-routin.module.ts -> canActivate: [SesionGuard]
@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {

  constructor(private cookie: CookieService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.comprobarSesionCookie();

  };

  //Funcion que devuelve si tienes o no token se llama cada vez que se invoca al middelware porque es lo qeu retornamos cuado se activa el middleware
  //En este caso cada vez qeu se intenta acceder a "/autenticacion"
  comprobarSesionCookie(): boolean {
    //En algunas funcion es impredecibles utilizamos tryCatch
    try {
      console.log(this.cookie.check('token'));

      // Verificar si la cookie de sesion cumple la condicion
      return !(this.cookie.check('token'));

    } catch (error) {
      console.error('Error', error);
      return true;
    };

  };
};