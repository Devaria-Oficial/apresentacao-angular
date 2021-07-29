import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { LoginComponent } from './login/login.component';
import { ComprovanteComponent } from './financeiro/comprovante/comprovante.component';
import { TransformarDataDirective } from './transformar-data.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const rotas: Routes = [
  {
    path: 'financeiro/comprovante/:id',
    component: ComprovanteComponent
  }
]

@NgModule({
  declarations: [
    FinanceiroComponent,
    LoginComponent,
    ComprovanteComponent,
    TransformarDataDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(rotas)
  ],
  exports: [
    FinanceiroComponent,
    LoginComponent,
    TransformarDataDirective
  ]
})
export class AdminModule { }
