import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServcicioAutenticacionService {

  private urlApi = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getCuentas(/*usuario: any*/): Observable<any> {
    const url = "autenticacion";
    return this.http.get(this.urlApi + url/*, usuario*/);
  }
}
