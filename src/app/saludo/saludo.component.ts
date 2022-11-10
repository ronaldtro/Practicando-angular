import { Component, OnInit } from '@angular/core';

@Component({ //Decorador propio de angular - Esta clase se convierte en un componente
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  mensaje: string;
  id: string;

  constructor() {

    this.mensaje = 'Soy el mensaje';
    this.id = 'Id estatico';

    setTimeout( () => {

      this.mensaje = 'Buuh! Cambie';

    }, 3000);

    
  }

  ngOnInit(): void {
  }

  miFuncion(): string{
    return 'Desde mi funcion';    
  }

}
