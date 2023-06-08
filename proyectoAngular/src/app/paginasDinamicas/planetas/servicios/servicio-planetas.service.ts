import { HttpClient } from '@angular/common/http';
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
}
