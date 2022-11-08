import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsuarioDatos } from './Interface/usuario-datos';
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges{ 
  title = 'Sistema angular';

  @Input() arreglo_enviar : Array<UsuarioDatos> = [];

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("send",this.arreglo_enviar);
  }

 /* alta_tablas(cliente:Array<UsuarioDatos>){
    this.arreglo_enviar = cliente;
    console.log("appComponent",this.arreglo_enviar);
  }*/

}
