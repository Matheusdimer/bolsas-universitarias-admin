import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TiposBolsa } from '../../../model/constants';
import { TableEditColumn } from '../../components/table-edit/table-edit.component';
import { BolsasService } from '../bolsas.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Bolsa, Requisito} from "../../../model/bolsa";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  @ViewChildren('requisitos') private requisitosElem!: QueryList<ElementRef>;

  readonly columns: TableEditColumn[] = [
    {
      model: 'descricao',
      editable: true,
      label: 'Descrição',
    },
  ];

  isEdit = false;
  isLoading = false;
  tipos = TiposBolsa;

  bolsa: Bolsa = {
    tipoBolsa: undefined,
    requisitos: [] as Requisito[],
  } as Bolsa;

  constructor(
    private service: BolsasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  turnLoad() {
    this.isLoading = !this.isLoading;
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('bolsaId');

    if (!param) {
      return;
    }

    this.isEdit = true

    this.service
      .find(parseInt(param))
      .subscribe((bolsa) => (this.bolsa = bolsa));
  }

  save(): void {
    this.turnLoad();
    console.log(this.bolsa);
    try {
      this.service.save(this.bolsa).subscribe(() => {
        this.router.navigate(['/bolsas']);
        this.turnLoad();
      })
    } catch (e) {
      this.turnLoad();
    }
  }
}
