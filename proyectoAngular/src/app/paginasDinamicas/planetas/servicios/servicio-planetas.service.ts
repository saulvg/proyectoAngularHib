import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPlanetasService {

  private urlApi = "http://localhost:3002/";

  constructor(private http: HttpClient) { }

  getPlanetas(): Observable<any> {
    const url = "planetas";
    return this.http.get(this.urlApi + url);
  }

  crearPlaneta(planeta: any): Observable<any> {
    const url = "planetas";
    return this.http.post(this.urlApi + url, planeta);
  }

  editarPlaneta(datos: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    const url = "planetas";
    return this.http.put(this.urlApi + url, datos, httpOptions)
    /*
    const url = `${this.urlApi}/${id}`;
    return this.http.put(url, planeta);*/
  }

  eliminarPlaneta(id: number): Observable<any> {
    const urlPlanetas = "planetas";
    const url = `${this.urlApi + urlPlanetas}/${id}`;
    return this.http.delete(url);
  }

  actualizarDatos(datos: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    const url = "planetas";
    return this.http.put(this.urlApi + url, datos, httpOptions);
  }
}
