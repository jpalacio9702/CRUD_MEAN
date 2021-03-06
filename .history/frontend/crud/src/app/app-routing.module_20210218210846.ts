import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAutosComponent } from './listar-autos/listar-autos.component';
import { CrearAutosComponent } from './crear-autos/crear-autos.component';

const routes: Routes = [
  {
    path:"",
    component: CrearAutosComponent,
    patch
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
