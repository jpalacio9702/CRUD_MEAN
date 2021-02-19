import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAutosComponent } from './listar-autos/listar-autos.component';
import { CrearAutosComponent } from './listar-autos/listar-autos.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
