import { AfterViewInit, Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { UsuarioDatos } from 'src/app/Interface/usuario-datos';
import { EventEmitter } from '@angular/core';
import { ObjetosService } from 'src/app/objetos.service';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent implements OnChanges {

  @Input() nombre_imp!:UsuarioDatos;
  @Output() comprobarEvent = new EventEmitter<boolean>(); //Datos a enviar al padre

  @Output() arr = new EventEmitter<any>();

  @Input() pagina!:number;
  @Input() posicionObjeto!:number;
  @Input() arreglo!:any[];

  constructor(private objetoSrv :ObjetosService){}

  ngOnChanges(): void {}

  cerrar(){
    console.log("Cerrar btn");
    this.comprobarEvent.emit(false);
  }

  cerrar_modal_fondo(){
    console.log("Cerrar modal");
    this.comprobarEvent.emit(false);
  }

  botonAceptar(){
    this.comprobarEvent.emit(false); //Cerrar el modal
    let i = 0;
    let index = 0;

    while(i<this.arreglo[this.pagina-1].length){
      if(this.arreglo[this.pagina-1][i].id === this.nombre_imp.id){
        for(let j=0;j<this.objetoSrv.array_guardar.length;j++){
          if(this.objetoSrv.array_guardar[j].id === this.arreglo[this.pagina-1][i].id){
            index = this.objetoSrv.array_guardar.indexOf(this.objetoSrv.array_guardar[j]);
          }
        }
        this.arreglo[this.pagina-1].splice(this.posicionObjeto,1);
        this.objetoSrv.array_guardar.splice(index,1);
      }
      i++;
    }
    this.actualizarTabla();
  }

  actualizarTabla(){
    let arregloAuxiliar :any[] = [];

    for(let i=0;i<this.objetoSrv.array_guardar.length;i+=2){
      arregloAuxiliar.push(this.objetoSrv.array_guardar.slice(i,i+2));
    }
      this.arreglo = arregloAuxiliar; //Actualizacion de la tabla
  }
 
 

}
