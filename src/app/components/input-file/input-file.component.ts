import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import {apiUrl} from "../../../constants/constants";

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
})
export class InputFileComponent implements OnInit {
  @Input() model?: number;

  @Output() modelChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() onChange: EventEmitter<Arquivo> = new EventEmitter<Arquivo>();

  arquivo?: Arquivo;

  url = `${apiUrl}/arquivos/`

  constructor(private service: UploadService) {}

  ngOnInit(): void {
    if (this.model) {
      this.service
        .getInfo(this.model)
        .subscribe((arquivo) => (this.arquivo = arquivo));
    }
  }

  upload(event: Event) {
    const element = event.target as HTMLInputElement;

    const file = element.files?.item(0);

    if (!file) return;

    this.service.upload(file).subscribe((arquivo) => {
      this.model = arquivo.id;
      this.arquivo = arquivo;

      if (this.model) {
        this.modelChange.emit(this.model);
        this.onChange.emit(this.arquivo);
      }
    });
  }

  remove() {
    delete this.model
    delete this.arquivo
    this.onChange.emit(this.arquivo);
  }
}
