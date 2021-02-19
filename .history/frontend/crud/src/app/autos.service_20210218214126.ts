import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor( private http: HttpClient ) { }
  private urlGeneral = 'http://localhost:3000/api/auto/';
  
  crearAuto( auto:any ){
  return this.http.post<any>( this.urlGeneral )
  }
}
