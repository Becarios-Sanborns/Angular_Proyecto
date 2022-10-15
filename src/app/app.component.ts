import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsuarioDatos } from './Interface/usuario-datos';
import { Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 

  title = 'Sistema angular';
  @Input() mensaje : Array<UsuarioDatos> = [];

  constructor(){}

  ngOnInit(): void {}

  alta_tablas(cliente:Array<UsuarioDatos>){
    this.mensaje = cliente;
  }

}
