import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { EventosComponent } from './eventos/eventos.component';
import { AlertaComponent } from './alerta/alerta.component';
import { FormsModule } from '@angular/forms';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { NgForComponent } from './ng-for/ng-for.component'; //NgModel


@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    PadreComponent,
    Hijo2Component,
    EventosComponent,
    AlertaComponent,
    SemaforoComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
