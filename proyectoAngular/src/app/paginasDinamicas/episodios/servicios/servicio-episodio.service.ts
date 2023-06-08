import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodiosDTO } from '../DTOs/episodiosDTO';

@Injectable({
  providedIn: 'root'
})
export class ServicioEpisodioService {

  private urlApi = "http://localhost:3002/";

  constructor(private http: HttpClient) { }

  getEpisodios(): Observable<any> {
    const url = "episodios";
    return this.http.get(this.urlApi + url)
  }

  actualizarDatos(datos: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    const url = "episodios";
    return this.http.put(this.urlApi + url, datos, httpOptions)
  }
}
