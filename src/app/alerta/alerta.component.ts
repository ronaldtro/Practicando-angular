import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  @Input() mensaje: string;

  constructor() {
    this.mensaje = 'Soy el h1';
  }

  ngOnInit(): void {
  }

}
