import {Component, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';

export declare interface TableEditColumn {
  model: string,
  label: string,
  editable: boolean,
  file?: boolean,
  width?: string,
  onChange?: ($event: any, index: number) => void
}

@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss']
})
export class TableEditComponent implements OnInit {
  @Input() model!: any;
  @Input() hasIndex!: boolean;
  @Input() name!: string;
  @Input() variable!: string;
  @Input() columns!: TableEditColumn[];

  @ViewChildren('items') private itemsElem!: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {

  }

  add() {
    if (!this.model[this.variable]) {
      this.model[this.variable] = []
    }

    this.model[this.variable].push({});
    setTimeout(
      () =>
        this.itemsElem.last?.nativeElement.querySelector('input').focus(),
      200
    );
  }

}
