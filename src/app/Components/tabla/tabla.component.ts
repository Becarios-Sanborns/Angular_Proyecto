import { Component, OnInit, SimpleChanges} from '@angular/core';
import { UsuarioDatos } from 'src/app/Interface/usuario-datos';
import { Input, OnChanges} from '@angular/core';

 
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements OnChanges{

  @Input() arreglo_get: Array <UsuarioDatos> = [];  //Objeto que recibe la informacion del componente registro

  /*=============== VARIABLES PARA PAGINACIÓN ===============*/
  personas_pagina :number = 2;
  pagina_actual :number = 1;

  arreglo_restriccion :UsuarioDatos[] = [];

  totalPaginas :number = this.total_paginas();
  
  constructor() {}

  total_paginas():number{
    return Math.ceil(this.arreglo_restriccion.length/this.personas_pagina);
  }

  ngOnChanges(changes:SimpleChanges):void{
   console.log("change - tabla");
   this.cambios();
  }

  cambios(){
    this.arreglo_restriccion = this.arreglo_get;
    console.log("arreglo",this.arreglo_restriccion);
    console.log("total",this.total_paginas());
  }

}
