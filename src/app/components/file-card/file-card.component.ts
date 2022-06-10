import { Component, Input, OnInit } from '@angular/core';
import { UploadService } from "../../services/upload.service";
import { Observable } from "rxjs";
import { apiUrl } from "../../../constants/constants";

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss']
})
export class FileCardComponent implements OnInit {

  url = `${apiUrl}/arquivos/`

  @Input() arquivoId!: number;

  $arquivo!: Observable<Arquivo>;

  constructor(private service: UploadService) { }

  ngOnInit(): void {
    this.$arquivo = this.service.getInfo(this.arquivoId);
  }

  getUrl(id: number) {
    return this.url + id;
  }
}
