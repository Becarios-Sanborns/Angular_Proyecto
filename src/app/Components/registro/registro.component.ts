import { Component, Input, OnInit, Output} from '@angular/core';
import { UsuarioDatos } from 'src/app/Interface/usuario-datos';
import { EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ObjetosService } from 'src/app/objetos.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit{

   registro: UsuarioDatos[] = []; //Array donde se guardaran los elementos

   @Output() mensaje_registro = new EventEmitter<Array<UsuarioDatos>>(); //Variable que sera enviada

   nombre_in! : String;
   apellido_in! : String;
   edad_in! : number;
   correo_in! : string;
   id : number = this.registro.length;

  constructor(private objetosSrv :ObjetosService){}

  ngOnInit(): void {console.log("Init - Registro")}

  registro_altas(){
    let caja: HTMLElement | null = document.getElementById('caja_tabla') as HTMLDivElement;
    
      if(!this.verificar_campos()){
        console.log("error");
      }else{
        const usuario : UsuarioDatos = {
          id: this.id+1,
          nombre: this.nombre_in,
          apellido: this.apellido_in,
          edad: this.edad_in,
          correo: this.correo_in,
          select: false
        } 
          this.id++;
          this.registro.push(usuario);
          this.objetosSrv.guardarObjeto(usuario);

          this.enviar_arreglo(this.registro); //Método para enviar a otro componente
        
          caja.style.paddingBottom ="25px";
          caja.style.height = "auto";
          this.limpiar_campos();
        }
        
        console.log(this.registro);
  }

  enviar_arreglo(evt:Array<UsuarioDatos>){
    this.mensaje_registro.emit(evt);
  }

  limpiar_campos(){
    this.nombre_in = "";
    this.apellido_in = "";
    this.correo_in = "";
    this.edad_in = 18;
  }

  verificar_campos():boolean{
    let validar = true;

    if((this.nombre_in == "" || this.nombre_in == undefined) || (this.apellido_in == "" || this.apellido_in == undefined)
       || (this.edad_in == null || this.edad_in == undefined || this.edad_in < 18 || this.edad_in > 80) || 
       (this.correo_in == "" || this.correo_in == undefined)){
        validar = false;
      }

      if(this.nombre_in == "" || this.nombre_in == undefined){
        validar = false;
      }else{
        if(this.validar_apellido()){}else{validar = false;}
        if(this.validar_edad()){}else{validar = false;}
        if(this.validar_correo()){}else{validar = false;}
      }

    return validar;
  }

  validar_apellido():boolean {
    let validar : boolean = true;

    if(this.apellido_in == "" || this.apellido_in == undefined){
      validar = false;
    }else{
      validar = true;
    }

    return validar;
  }

  validar_edad():boolean {
    let validar : boolean = true;

    if(this.edad_in == null || this.edad_in == undefined){
      validar = false;
    }else{
      validar = true;
    }

    return validar;
  }

  validar_correo():boolean{
    let validar : boolean = true;
    let extensiones : RegExp = /^\b[\w\.-]+@(yahoo|outlook|hotmail|live|gmail)+\.(com)\b$/;

    if(this.correo_in == "" || this.correo_in == undefined){
      validar = false;
    }else{
      if(extensiones.test(this.correo_in)){
        validar = true;
      }else{
        alert("Correo invalido \n\t\tExtensiones disponibles \ngmail/yahoo/outlook/hotmail/live.com \nEjemplo: alguien@gmail.com");
        validar = false;
      }
    }

    return validar;
  }

}
