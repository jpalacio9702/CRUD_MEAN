import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-autos',
  templateUrl: './listar-autos.component.html',
  styleUrls: ['./listar-autos.component.css']
})
export class ListarAutosComponent implements OnInit {

  constructor( private router: Router, private auto: AutosService) { }

  lista:any = []

  ngOnInit(): void {
    this.auto.listarAutos().subscribe(
      (res) => {
        this.lista = res;
      },
      ( error ) => {
        console.log( error );
      }
    )
  }

  eliminar(autoSelec:any){
    this.auto.eliminarAuto(autoSelec).subscribe(
      ( res ) => {
        const index = this.lista.ind
      }
    )
  }

}
