import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {

  public propPublica: string = 'Douglas'
  private propPrivada: string = 'Prop Privada'
  protected propProtected: string = 'Prop Protected'
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.propPublica = 'Outro valor'
    }, 5000);
  }

  getPropPrivada(): string {
    return this.propPrivada;
  }
}
