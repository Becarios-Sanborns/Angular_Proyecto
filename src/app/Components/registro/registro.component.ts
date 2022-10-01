import { Component, OnInit, Input, Output} from '@angular/core';
import { UsuarioDatos } from 'src/app/Interface/usuario-datos';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {

   registro: Array<UsuarioDatos> = []; //Array donde se guardaran los elementos

   nombre_in! : String;
   apellido_in! : String;
   edad_in! : number;
   correo_in! : string;
   id : number = this.registro.length;
   
   @Output() mensaje_registro = new EventEmitter< Array<UsuarioDatos> >();

  constructor() {}
  //ngOnInit(): void {  }

  registro_altas(){
    let nombre_c:String = this.nombre_in;
    let apellido_c:String = this.apellido_in;
    let edad_c:number = this.edad_in;
    let correo_c:string = this.correo_in;
    let caja: HTMLElement | null = document.getElementById('caja_tabla') as HTMLDivElement;
    
      if(this.verificar_campos(nombre_c,apellido_c,edad_c,correo_c)){
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
          
          this.enviar_arreglo(this.registro); //PASAR ARREGLO

          caja.style.paddingBottom="25px";
          caja.style.height = "auto";
        
          console.log("array:",this.registro);   
          this.limpiar_campos();
        }
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

  verificar_campos(nom : String,ape : String, age : number, cor : string):boolean{
    let validar:boolean = true;

    if((nom=="" || nom==undefined) && (ape=="" || ape==undefined) && (cor=="" || cor==undefined) && (age==null || age>0)){
      validar = true;
    }else{
      validar = false;
    }

    if(nom=="" || nom==undefined){
      validar = true;
    }else{
      this.validar_apellido(ape) ? validar = true : validar = false;
      this.validar_edad(age) ? validar = true : validar = false;
      this.validar_correo(cor) ? validar = true : validar = false;
    }
    return validar;
  }

  validar_apellido(apellido:String):boolean{
    let validar:boolean = true;
    if(apellido == "" || apellido == undefined){
      validar = true;
    }else{
      validar = false;
    }
    return validar;
  }

  validar_edad(edad:number):boolean{
    let validar:boolean = true;
    if(edad == null || edad < 18 || edad > 80){
      validar = true;
    }else{
      validar = false;
    }
    return validar;
  }

  validar_correo(correo:string):boolean{
    let validar:boolean = true;
    let extensiones:RegExp = /^\b[\w\.-]+@(yahoo|outlook|hotmail|live|gmail)+\.(com)\b$/;
    if(correo == "" || correo == undefined){
      validar = true;
    }else{
        if(extensiones.test(correo)){
          validar = false;
        }else{
          alert("Correo invalido \n\t\tExtensiones disponibles \ngmail/yahoo/outlook/hotmail/live.com \nEjemplo: alguien@gmail.com");
          validar = true;
        }
    }
    return validar;
  }


}
