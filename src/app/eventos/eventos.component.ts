import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  mensaje: string;
  datoInput : string;

  constructor() { 

    this.mensaje = '';
    this.datoInput = '';

  }

  ngOnInit(): void {
  }

  funcionEjemplo($event:any): void{


    this.mensaje = this.datoInput;

  }

}
