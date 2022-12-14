import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UsuarioDatos } from './Interface/usuario-datos';

@Injectable({
  providedIn: 'root'
})
export class ObjetosService {

  array_guardar : UsuarioDatos[];
  private observable$ : Subject<UsuarioDatos[]>;
  comprobar! : boolean;

  constructor() { 
    this.array_guardar = [];
    this.observable$ = new Subject();
    this.comprobar = false;
  }

  guardarObjeto(persona:UsuarioDatos){
    this.array_guardar.push(persona);
    console.log("Service",this.array_guardar);
    this.observable$.next(this.array_guardar);
  }

  devolverObjeto():Observable<UsuarioDatos[]>{
    return this.observable$.asObservable();
  }

  

}
