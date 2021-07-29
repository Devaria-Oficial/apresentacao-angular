import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'comprovante',
  templateUrl: './comprovante.component.html',
  styleUrls: ['./comprovante.component.css']
})
export class ComprovanteComponent implements OnInit {

  idComprovante?: string
  dataSelecionada?: string
  datasPagamento: Date[] = [
    new Date("2021-07-29T03:01:48.165Z"),
    new Date("2021-05-02T13:08:48.165Z"),
    new Date("2021-06-21T05:14:48.165Z")
  ]
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.idComprovante = params.id;
    });
  }

}
