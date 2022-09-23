import { Component } from '@angular/core';
import { UsuarioDatos } from './Interface/usuario-datos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema angular';

  mensaje : Array<UsuarioDatos> = [];

  alta_tablas(cliente:Array<UsuarioDatos>){
    this.mensaje = cliente;
  }

}
