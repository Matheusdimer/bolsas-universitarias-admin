import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/constants/constants';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private path = apiUrl + '/alunos'

  constructor(
    private http: HttpClient
  ) { }

  findAll() {
    return this.http.get<Aluno[]>(this.path);
  }
  find(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.path}/${id}`);
  }

  update(aluno: Aluno) {
    return this.http.put<Aluno>(`${this.path}/${aluno.id}`, aluno);
  }

  save(aluno: Aluno): Observable<Aluno> {
    if (aluno.id) {
      return this.update(aluno);
    }

    return this.http.post<Aluno>(this.path, aluno);
  }
}
