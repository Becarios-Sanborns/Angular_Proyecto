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

  @Input() mensaje : Array<UsuarioDatos> = [];

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
  }

  alta_tablas(cliente:Array<UsuarioDatos>){
    this.mensaje = cliente;
  }

}
