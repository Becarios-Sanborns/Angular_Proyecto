import { Component, OnInit, SimpleChanges} from '@angular/core';
import { UsuarioDatos } from 'src/app/Interface/usuario-datos';
import { Input, OnChanges} from '@angular/core';
import { ObjetosService } from 'src/app/objetos.service';
 
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements OnInit{

  @Input() arreglo_get: Array <UsuarioDatos> = [];  //Objeto que recibe la informacion del componente registro

  personas_pagina :number = 2;
  pagina_actual :number = 0;
  totalPaginas :number = 0;
  arreglo_segmentado :UsuarioDatos[] = [];

  arreglo_tabla:any[] = [];
 
  constructor(private objetoSrv :ObjetosService){}

  total_paginas():number{
    return this.totalPaginas;
  }

  ngOnInit():void{
    this.objetoSrv.devolverObjeto().subscribe(personas => {
      this.arreglo_get = personas;
      this.arreglo_segmentado = this.arreglo_get;
    
      if(this.totalPaginas+1 > 0){this.pagina_actual = 1;}

      this.totalPaginas = Math.ceil(this.arreglo_get.length/this.personas_pagina);

      let arreglo :any[] = [];

      for(let i=0;i<this.arreglo_segmentado.length;i+=this.personas_pagina){
        arreglo.push(this.arreglo_segmentado.slice(i,i+this.personas_pagina));
      }

      this.arreglo_tabla = arreglo;

    });
  }

    inicio() : void {
      this.pagina_actual = 1;
      console.log("Inicio",this.pagina_actual);
    }

    anterior() : void {
      if(this.pagina_actual > 1){
      this.pagina_actual--;
      console.log("Anterior",this.pagina_actual);
      }
    }

    siguiente() : void {
      if(this.pagina_actual < this.totalPaginas){
      this.pagina_actual++;
      console.log("Siguiente",this.pagina_actual);
      }
    }

    final() : void {
      this.pagina_actual = this.totalPaginas;
      console.log("Final",this.pagina_actual);
    }


}
