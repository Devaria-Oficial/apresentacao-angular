import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apresentacao-angular';

  focoCampoData(eventoQualquer: FocusEvent) {
    const elemento = eventoQualquer.target as HTMLInputElement
    elemento.type = 'date';
  }
}
