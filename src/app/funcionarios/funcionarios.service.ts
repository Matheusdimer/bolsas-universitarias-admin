import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private path = apiUrl + '/funcionarios'

  constructor(
    private http: HttpClient

  ) { }

  findAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.path)
  }
  find(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.path}/${id}`);
  }

  update(funcionario: Funcionario) {
    return this.http.put<Funcionario>(`${this.path}/${funcionario.id}`, funcionario);
  }

  save(funcionario: Funcionario): Observable<Funcionario> {
    if (funcionario.id) {
      return this.update(funcionario);
    }

    return this.http.post<Funcionario>(this.path, funcionario);
  }
}
