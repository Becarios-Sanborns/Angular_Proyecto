import { Component, Input, OnInit} from '@angular/core';
import { UsuarioDatos } from 'src/app/Interface/usuario-datos';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements OnInit {

  @Input() arreglo_alta_get: Array <UsuarioDatos> = []; 
 
  constructor() { }

  ngOnInit(): void {
  }

}
