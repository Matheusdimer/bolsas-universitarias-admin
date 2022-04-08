import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants/constants';
import {Bolsa} from "../../model/bolsa";

@Injectable({
  providedIn: 'root'
})
export class BolsasService {

  private path = apiUrl + '/bolsas'

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Bolsa[]> {
    return this.http.get<Bolsa[]>(this.path);
  }

  find(id: number): Observable<Bolsa> {
    return this.http.get<Bolsa>(`${this.path}/${id}`);
  }

  update(bolsa: Bolsa) {
    return this.http.put<Bolsa>(`${this.path}/${bolsa.id}`, bolsa);
  }

  save(bolsa: Bolsa): Observable<Bolsa> {
    if (bolsa.id) {
      return this.update(bolsa);
    }

    return this.http.post<Bolsa>(this.path, bolsa);
  }
}
