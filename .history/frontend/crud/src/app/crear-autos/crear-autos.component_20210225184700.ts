import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-autos',
  templateUrl: './crear-autos.component.html',
  styleUrls: ['./crear-autos.component.css']
})
export class CrearAutosComponent implements OnInit {

  constructor( private router: Router, private auto: ) { }

  ngOnInit(): void {
  }

  nuevoAuto = {
    marca: '',
    modelo: '',
    color: '',
    precio: ''
  }
}
