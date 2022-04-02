import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants/constants';

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
}
