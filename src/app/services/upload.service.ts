import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiUrl} from '../../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  readonly path = `${apiUrl}/arquivos`;

  constructor(private http: HttpClient) {}

  getInfo(id: number) {
    return this.http.get<Arquivo>(`${this.path}/${id}/info`)
  }

  upload(file: File) {
    const form = new FormData();
    form.append('file', file, file.name);

    return this.http.post<Arquivo>(this.path, form);
  }
}
