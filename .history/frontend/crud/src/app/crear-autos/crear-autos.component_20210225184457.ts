import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service'

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
