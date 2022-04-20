import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import {apiUrl} from "../../../constants/constants";

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
})
export class InputFileComponent implements OnInit, OnChanges {
  @Input() model?: number;

  @Output() modelChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() onChange: EventEmitter<Arquivo> = new EventEmitter<Arquivo>();

  arquivo?: Arquivo;

  uploadingName: string | null = null; 

  url = `${apiUrl}/arquivos/`

  constructor(private service: UploadService) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    this.loadFile();
  }

  ngOnInit(): void {
    this.loadFile();
  }

  loadFile() {
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

    this.uploadingName = file.name;

    this.service.upload(file).subscribe((arquivo) => {
      this.model = arquivo.id;
      this.arquivo = arquivo;
      this.uploadingName = null;

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
