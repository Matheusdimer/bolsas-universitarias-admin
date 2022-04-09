import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  path = apiUrl + '/funcionarios'

  constructor(
    private http: HttpClient

  ) { }

  findAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.path)
  }
}
