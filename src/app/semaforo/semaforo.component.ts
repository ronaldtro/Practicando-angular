import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  color: string;
  interval: any;
  contador: number;

  constructor() {

    this.color = 'rojo';
    this.contador = 1;

    this.interval = setInterval( () => {

      switch(this.contador){

        case 1:
          this.color = 'rojo';
          break;
        case 2:
          this.color = 'amarillo';
          break;
        case 3:
          this.color = 'verde';
          break;  
          
      }


      if(this.contador==3){
        clearInterval(this.interval);
      }

      this.contador++;

    }, 1500);

  }

  ngOnInit(): void {
  }

}
