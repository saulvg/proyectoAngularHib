import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonajesService {

  private urlApi = 'http://localhost:3002/personajes';

  constructor(private http: HttpClient) { }

  getPersonajes(): Observable<any> {
    return this.http.get(this.urlApi);
  }

  crearPersonaje(personaje: any): Observable<any> {
    return this.http.post(this.urlApi, personaje);
  }

  editarPersonaje(id: number, personaje: any): Observable<any> {
    const url = `${this.urlApi}/${id}`;
    return this.http.put(url, personaje);
  }

  eliminarPersonaje(id: number): Observable<any> {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete(url);
  }
}
