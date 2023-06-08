import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodiosDTO } from '../DTOs/episodiosDTO';

@Injectable({
  providedIn: 'root'
})
export class ServicioEpisodioService {

  private urlApi = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getEpisodios(): Observable<any> {
    const url = "episodios";
    return this.http.get(this.urlApi + url)
  }
}
