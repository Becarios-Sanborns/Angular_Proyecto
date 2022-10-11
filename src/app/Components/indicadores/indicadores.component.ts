import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { UsuarioDatos } from 'src/app/Interface/usuario-datos';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit {

  @Input() contador_icono! :UsuarioDatos[]; //Arreglo que obtiene los datos del component Padre (component Tabla)
  @Input() numero_pagina! :number;

  constructor() { }

  ngOnInit(): void {}

}
