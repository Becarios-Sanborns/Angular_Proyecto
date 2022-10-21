import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { UsuarioDatos } from 'src/app/Interface/usuario-datos';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit {

  @Input() contador_icono! :UsuarioDatos[]; // Tamaño del arreglo (padre-tabla)
  @Input() numero_pagina! :number;          // Pagina actual (padre-tabla)
  @Input() total_paginas! :number;          // Total de paginas (padre-tabla)
  @Input() posiciones! :number;

  constructor() { }

  ngOnInit(): void {}

}
