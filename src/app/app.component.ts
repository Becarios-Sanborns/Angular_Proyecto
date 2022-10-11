import { Component, OnInit } from '@angular/core';
import { UsuarioDatos } from './Interface/usuario-datos';
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 

  title = 'Sistema angular';
  
  constructor(){}
  ngOnInit(): void {console.log("Init - AppComponent")}

  @Input() mensaje : Array<UsuarioDatos> = [];

  alta_tablas(cliente:Array<UsuarioDatos>){
    this.mensaje = cliente;
  }



}
