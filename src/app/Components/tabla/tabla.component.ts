import { Component, OnInit} from '@angular/core';
import { UsuarioDatos } from 'src/app/Interface/usuario-datos';
import { Input, Output} from '@angular/core';
 
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent{

  @Input() arreglo_alta_get: Array <UsuarioDatos> = [];  //Objeto que recibe la informacion del componente padre


  @Output() contador_objetos : number = 5; 

  constructor() { }
  
}