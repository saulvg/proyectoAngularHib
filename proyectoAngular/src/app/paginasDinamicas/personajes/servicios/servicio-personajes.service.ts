import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  editarPersonaje(datos: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    const url = "personajes";
    return this.http.put(this.urlApi + url, datos, httpOptions);
  }

  eliminarPersonaje(id: number): Observable<any> {
    console.log(id);
    const url = `${this.urlApi}/${id}`;
    return this.http.delete(url);
  }
}
