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
  posicion_inicio:number = 1;

  arreglo_copia :UsuarioDatos[] = [];
  arreglo_tabla :any[] = [];

  objeto_out!:UsuarioDatos;
  visualizar:boolean = false;

 
  constructor(private objetoSrv :ObjetosService){}

  total_paginas():number{
    return this.totalPaginas;
  }

  ngOnInit():void{
    this.objetoSrv.devolverObjeto().subscribe(personas => {
      this.arreglo_tabla = personas;
      
      console.log("tb",this.arreglo_tabla);
    
      if(this.totalPaginas+1>0){this.pagina_actual = 1;}

      this.totalPaginas = Math.ceil(this.arreglo_tabla.length/this.personas_pagina);

      let arreglo :any[] = [];

      for(let i=0;i<this.arreglo_tabla.length;i+=this.personas_pagina){
        arreglo.push(this.arreglo_tabla.slice(i,i+this.personas_pagina));
      }

      this.arreglo_tabla = arreglo;

    });
  }

  borrar(objeto:UsuarioDatos) :void{
    let aux = 0;

    this.visualizar = true;

    this.objeto_out = objeto;

    
   /*  while(aux<this.arreglo_tabla[this.pagina_actual-1].length){
      if(this.arreglo_tabla[this.pagina_actual-1][aux].id === objeto.id){
        console.log("Encontrado",this.arreglo_tabla[this.pagina_actual-1][aux]);
       this.objeto_out = this.arreglo_tabla[this.pagina_actual-1][aux];
      }
      aux++;
     }*/

  } 

  cerrar_ventana():boolean{
    return this.visualizar = false;
  }

    inicio() :void{
      this.pagina_actual = 1;
      console.log("Inicio",this.pagina_actual);
    }

    anterior() :void{
      if(this.pagina_actual > 1){
      this.pagina_actual--;
      console.log("Anterior",this.pagina_actual);
      }
    }

    siguiente() :void{
      if(this.pagina_actual < this.totalPaginas){
      this.pagina_actual++;
      console.log("Siguiente",this.pagina_actual);
      }
    }

    final() :void{ 
      this.pagina_actual = this.totalPaginas;
      console.log("Final",this.pagina_actual);
    }

      
   
}
