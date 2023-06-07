import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonajesService {

  private urlApi = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getPersonajes(): Observable<any> {
    return this.http.get(this.urlApi + "personajes");
  }
}
