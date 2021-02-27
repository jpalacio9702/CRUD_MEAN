import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-autos',
  templateUrl: './listar-autos.component.html',
  styleUrls: ['./listar-autos.component.css']
})
export class ListarAutosComponent implements OnInit {

  constructor() { }

  lista:any = []

  ngOnInit(): void {
  }

}
