import { AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';
import { UsuarioDatos } from 'src/app/Interface/usuario-datos';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent implements OnInit {

  @Input() nombre_imp!:UsuarioDatos;
  comprobar!:boolean; //Variable que se envía
  @Output() comprobarEvent = new EventEmitter<boolean>(); //Datos a enviar al padre
  display: boolean = false; //Cerrar con el modal 

  ngOnInit(): void {}

  cerrar(){
    console.log("Cerrar botones");
    this.comprobarEvent.emit(false);
  }

  cerrar_modal_fondo(){
    console.log("Cerrar modal");
    this.comprobarEvent.emit(false);
  }

}
