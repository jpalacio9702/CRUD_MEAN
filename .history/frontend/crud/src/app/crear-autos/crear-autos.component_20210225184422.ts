import { Component, OnInit } from '@angular/core';
import {  }

@Component({
  selector: 'app-crear-autos',
  templateUrl: './crear-autos.component.html',
  styleUrls: ['./crear-autos.component.css']
})
export class CrearAutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nuevoAuto = {
    marca: '',
    modelo: '',
    color: '',
    precio: ''
  }
}
