import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Ejemplo1';
  propiedadesParrafo: any;
  ver: boolean;
  mostrar: boolean;

  
  constructor(){

    this.propiedadesParrafo = {
      color: 'orange',
      fontSize: '30px'
    }

    this.ver = false;
    this.mostrar = true;

  }

  cambiaColor(color: string){

    switch(color){
      case 'v':
        this.propiedadesParrafo.color = 'green';
        break;
      case 'r':
        this.propiedadesParrafo.color = 'red';
        break;
      case 'a':
        this.propiedadesParrafo.color = 'yellow';
        break;
    }

  }  

  onChange($event: any){
    this.propiedadesParrafo.fontSize = `${$event.target.value}px`;
  }



}
