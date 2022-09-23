import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './Components/registro/registro.component';
import { TablaComponent } from './Components/tabla/tabla.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';
import { IndicadoresComponent } from './Components/indicadores/indicadores.component';
import { ModalEliminarComponent } from './Components/modal-eliminar/modal-eliminar.component';
import { ModalDatosComponent } from './Components/modal-datos/modal-datos.component';
import { ModalPersonComponent } from './Components/modal-person/modal-person.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    TablaComponent,
    BuscadorComponent,
    IndicadoresComponent,
    ModalEliminarComponent,
    ModalDatosComponent,
    ModalPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
