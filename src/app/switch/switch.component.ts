import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  opcionNumero: number;
  opcionString: string;

  constructor() {
    this.opcionNumero = 3;
    this.opcionString = 'uno';
  }

  ngOnInit(): void {
  }

}
