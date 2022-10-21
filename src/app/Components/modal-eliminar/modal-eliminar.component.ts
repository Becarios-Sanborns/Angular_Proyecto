import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { UsuarioDatos } from 'src/app/Interface/usuario-datos';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent implements AfterViewInit, OnInit {

  constructor() { }

  @Input() nombre_imp!:UsuarioDatos;
  @Input() ver:boolean = false;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
  }

  cerrar(){
    return this.ver == true;
  }
 



}
