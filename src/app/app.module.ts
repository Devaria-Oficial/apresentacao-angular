import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminModule } from './admin/admin.module';
import { PipeTestePipe } from './pipe-teste.pipe';

import { FinanceiroComponent } from './admin/financeiro/financeiro.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';

const rotas: Routes = [
  {
    path: 'financeiro',
    component: FinanceiroComponent
  },
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PipeTestePipe
  ],
  imports: [
    BrowserModule,
    AdminModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
