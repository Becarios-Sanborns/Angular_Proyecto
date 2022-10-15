import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UsuarioDatos } from './Interface/usuario-datos';

@Injectable({
  providedIn: 'root'
})
export class ObjetosService {

  private array_guardar : UsuarioDatos[];
  private observable$ : Subject<UsuarioDatos[]>;

  constructor() { 
    this.array_guardar = [];
    this.observable$ = new Subject();
  }

  guardarObjeto(persona:UsuarioDatos){
    this.array_guardar.push(persona);
    this.observable$.next(this.array_guardar);
  }

  devolverObjeto():Observable<UsuarioDatos[]>{
    return this.observable$.asObservable();
  }

}
