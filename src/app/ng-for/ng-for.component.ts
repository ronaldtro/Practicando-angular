import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  personas: any[];

  constructor() {
    this.personas = [
      {nombre: 'Ronald', apellido: 'Castro', edad: 24},
      {nombre: 'Fabian', apellido: 'Fuentes', edad: 23},
      {nombre: 'Mariana', apellido: 'Pajon', edad: 31},
      {nombre: 'Juliana', apellido: 'Cifuentes', edad: 25}
    ];
  }

  ngOnInit(): void {
  }

}
