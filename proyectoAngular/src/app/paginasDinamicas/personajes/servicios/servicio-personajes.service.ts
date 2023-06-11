import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonajesService {

  private urlApi = 'http://localhost:3002/personajes';

  constructor(private http: HttpClient) { }

  /** Recibe todos los personajes */
  getPersonajes(): Observable<any> {
    return this.http.get(this.urlApi);
  }

  /** Crear un nuevo personaje */
  crearPersonaje(personaje: any): Observable<any> {
    return this.http.post(this.urlApi, personaje);
  }

  /** Editar un personaje */
  editarPersonaje(datos: any): Observable<any> {
    return this.http.put(this.urlApi, datos);
  }

  /** Eliminar un personaje */
  eliminarPersonaje(id: number): Observable<any> {
    console.log(id);
    const url = `${this.urlApi}/${id}`;
    return this.http.delete(url);
  }
}
