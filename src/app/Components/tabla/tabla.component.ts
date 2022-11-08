import { Component, OnInit, Output, SimpleChanges} from '@angular/core';
import { UsuarioDatos } from 'src/app/Interface/usuario-datos';
import { Input, OnChanges} from '@angular/core';
import { ObjetosService } from 'src/app/objetos.service';
 
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements OnChanges{

  @Input() arreglo_get: Array <UsuarioDatos> = [];  //Objeto que recibe la informacion del componente registro

  personas_pagina :number = 2; //Limite de paginacion
  pagina_actual :number = 1; //Cambio de pagina
  totalPaginas :number = 1; //Total de paginas

  arreglo_tabla :any[] = []; 
  arreglo_ex :any[]=[]; //Arreglo hacía component indicadores --> contador

  objeto_out!:UsuarioDatos; //Objeto a enviar para modal
  visualizar:boolean = false; 
  posicionPersona!:number;
 
  constructor(private objetoSrv :ObjetosService){}

  total_paginas():number{
    return this.totalPaginas;
  }

  ngOnChanges():void{
    this.objetoSrv.devolverObjeto().subscribe(personas => {
      var arreglo :any[] = [];

      this.arreglo_ex = this.objetoSrv.array_guardar;      
      this.arreglo_tabla = personas;
      this.totalPaginas = Math.ceil(this.objetoSrv.array_guardar.length/this.personas_pagina);

      for(let i=0;i<this.objetoSrv.array_guardar.length;i+=this.personas_pagina){
        arreglo.push(this.objetoSrv.array_guardar.slice(i,i+this.personas_pagina));
      }
  
      this.arreglo_tabla = arreglo;
    });
  } 


  borrar(objeto:UsuarioDatos,index:number) :void{
    this.visualizar = true;
    this.objeto_out = objeto; //Objeto de salida hacia otro componente
    this.posicionPersona = index;
   
    this.totalPaginas = Math.ceil(this.objetoSrv.array_guardar.length/this.personas_pagina);
  }

  cerrar_ventana(event:boolean){
    this.visualizar = event;
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


/*Local Storage
let numVisitas = 0;
  if(localStorage.visitas){
    numVisitas = parseInt(localStorage.visitar);
    numVisitas++;
  }
  localStorage.visitas(HTML)= numVisitar;

 let pos = 0;

    while(i<this.arreglo_tabla[this.pagina_actual-1].length){
      if(this.arreglo_tabla[this.pagina_actual-1][i].id === objeto.id){
        for(let j=0;j<this.objetoSrv.array_guardar.length;j++){
          if(this.arreglo_tabla[this.pagina_actual-1][i].id === this.objetoSrv.array_guardar[j].id){
            pos = this.objetoSrv.array_guardar.indexOf(this.objetoSrv.array_guardar[j]);
          }
        }
            console.log("POS",pos);
            this.arreglo_tabla[this.pagina_actual-1].splice(index,1);
            this.objetoSrv.array_guardar.splice(pos,1);
        }
            i++;
    }

  */