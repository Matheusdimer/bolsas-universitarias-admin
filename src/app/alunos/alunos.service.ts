import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/constants/constants';

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
}
