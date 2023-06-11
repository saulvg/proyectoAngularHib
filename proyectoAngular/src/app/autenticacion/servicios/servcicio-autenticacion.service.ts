import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuarios } from '../interfaces/usuarios';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

//Servicio para realizar una peticion sobre un usuario supuestamente logeado

//Para utilizar "cookie" hemos instalado la libreria "npm i ngx-cookie-service --save"
export class ServcicioAutenticacionService {

  private readonly urlApi = "http://localhost:3002/usuarios";

  constructor(private http: HttpClient, private cookie: CookieService) { }

  enviarCredenciales(email: string, password: string): Observable<any> {
    const body: Usuarios = {
      email,
      password
    }
    return this.http.post(this.urlApi, body).pipe(
      //Si la respuesta es correcta
      //Ahadimos un el token (ficticio) que nos devuelve el back a las cookies durante cuatro dias (opcion personal) e indicamos que aplica a toda la app (/)

      tap((res: any) => {
        this.cookie.set('token', res.token, 4, "/")
      })
    )

  }

  registrarUsuaio(email: string, password: string): Observable<any> {

    const url = '/register'

    const body: Usuarios = {
      email,
      password
    }

    return this.http.post(this.urlApi + url, body)

  }

}
