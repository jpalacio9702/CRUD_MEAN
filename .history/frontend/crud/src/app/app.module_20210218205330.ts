import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { ListarAutosComponent } from './listar-autos/listar-autos.component';
import { CrearAutosComponent } from './crear-autos/crear-autos.component';

//

@NgModule({
  declarations: [
    AppComponent,
    ListarAutosComponent,
    CrearAutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
