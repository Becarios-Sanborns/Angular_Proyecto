import { Component, OnInit, SimpleChanges} from '@angular/core';
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
  pagina_actual :number = 0; //Cambio de pagina
  totalPaginas :number = 0; //Total de paginas

  arreglo_tabla :any[] = [];
  arreglo_ex :any[]=[];

  objeto_out!:UsuarioDatos; //Objeto a enviar para modal
  visualizar:boolean = false; 
  @Input() aceptarEmitter!:boolean;
  tiempo!:boolean;

  constructor(private objetoSrv :ObjetosService){}

  total_paginas():number{
    return this.totalPaginas;
  }

  ngOnChanges():void{
    this.objetoSrv.devolverObjeto().subscribe(personas => {

      this.arreglo_ex = this.objetoSrv.array_guardar;
      this.arreglo_tabla = personas;
    
      if(this.totalPaginas+1>0){this.pagina_actual = 1;}

      this.totalPaginas = Math.ceil(this.arreglo_tabla.length/this.personas_pagina);

      var arreglo :any[] = [];

      for(let i=0;i<this.arreglo_tabla.length;i+=this.personas_pagina){
        arreglo.push(this.arreglo_tabla.slice(i,i+this.personas_pagina));
      }
    
      this.arreglo_tabla = arreglo;

      console.log("Tb",this.arreglo_tabla);

    });


  } 

  borrar(objeto:UsuarioDatos,index:number) :void{
    let i = 0; 
    this.visualizar = true;
    this.objeto_out = objeto; //Objeto de salida hacia otro componente
    let posicionPersona = index;

   // if(this.aceptarEmitter == true){
      while(i<this.arreglo_tabla[this.pagina_actual-1].length){
          if(this.arreglo_tabla[this.pagina_actual-1][i].id === objeto.id){
                console.log(posicionPersona);
                this.arreglo_tabla[this.pagina_actual-1].splice(posicionPersona,1);
                this.arreglo_get.splice(posicionPersona,1);
                this.arreglo_ex.splice(posicionPersona,1);
            }
                i++;
      }
    //}

  } 

  comprobarEliminar(event:boolean){
    this.aceptarEmitter = event;
    console.log("met",this.aceptarEmitter); //imprime true
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
