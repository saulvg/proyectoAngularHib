import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioEpisodioService {

  private urlApi = "http://localhost:3002/episodios";

  constructor(private http: HttpClient) { }

  getEpisodios(): Observable<any> {
    return this.http.get(this.urlApi)
  }

  actualizarDatos(datos: any): Observable<any> {

    return this.http.put(this.urlApi, datos)
  }

  eliminarEpisodio(id: number): Observable<any> {
    const url = `/${id}`;
    return this.http.delete(this.urlApi + url)
  }

  crearEpisodio(datos: any): Observable<any> {
    return this.http.post(this.urlApi, datos)
  }
}
