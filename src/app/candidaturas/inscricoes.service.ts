import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants/constants';
import {InscricaoBolsa} from "../../model/inscricao";

@Injectable({
  providedIn: 'root'
})
export class InscricoesService {

  private path = apiUrl + '/inscricoes'

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<InscricaoBolsa[]> {
    return this.http.get<InscricaoBolsa[]>(this.path);
  }

  find(id: number): Observable<InscricaoBolsa> {
    return this.http.get<InscricaoBolsa>(`${this.path}/${id}`);
  }

  update(inscricaoBolsa: InscricaoBolsa) {
    return this.http.put<InscricaoBolsa>(`${this.path}/${inscricaoBolsa.id}`, inscricaoBolsa);
  }

  save(inscricaoBolsa: InscricaoBolsa): Observable<InscricaoBolsa> {
    if (inscricaoBolsa.id) {
      return this.update(inscricaoBolsa);
    }

    return this.http.post<InscricaoBolsa>(this.path, inscricaoBolsa);
  }

}
