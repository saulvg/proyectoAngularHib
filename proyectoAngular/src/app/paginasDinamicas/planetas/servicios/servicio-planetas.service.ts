import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPlanetasService {

  private urlApi = "http://localhost:3002/";

  constructor(private http: HttpClient) { }

  /** Método que se encarga de recibir todos los planetas */
  getPlanetas(): Observable<any> {
    const url = "planetas";
    return this.http.get(this.urlApi + url);
  }

  /** Método que se encarga de crear un nuevo planeta */
  crearPlaneta(planeta: any): Observable<any> {
    const url = "planetas";
    return this.http.post(this.urlApi + url, planeta);
  }

  /** Método que se encarga de editar un planeta */
  editarPlaneta(datos: any): Observable<any> {
    const url = "planetas";
    return this.http.put(this.urlApi + url, datos);
    
  }

  /** Método que se encarga de eliminar un planeta */
  eliminarPlaneta(id: number): Observable<any> {
    console.log(id);
    const urlPlanetas = "planetas";
    const url = `${this.urlApi + urlPlanetas}/${id}`;
    return this.http.delete(url);
  }
  
}
