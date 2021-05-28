import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasajesComponent } from './views/pasajes/pasajes.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NoticiasComponent } from './views/noticias/noticias.component';
import { TraductorComponent } from './views/traductor/traductor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaDescuentoPipe } from './pipes/categoria-descuento.pipe';
import { CategoriaPasajePipe } from './pipes/categoria-pasaje.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PasajesComponent,
    NavbarComponent,
    NoticiasComponent,
    TraductorComponent,
    CategoriaDescuentoPipe,
    CategoriaPasajePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
