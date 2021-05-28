import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasajesComponent } from './views/pasajes/pasajes.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NoticiasComponent } from './views/noticias/noticias.component';
import { TraductorComponent } from './views/traductor/traductor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaDescuentoPipe } from './pipes/categoria-descuento.pipe';
import { CategoriaPasajePipe } from './pipes/categoria-pasaje.pipe';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { CrudnoticiaComponent } from './views/crudnoticia/crudnoticia.component';
import { ViewlogsComponent } from './views/viewlogs/viewlogs.component';
@NgModule({
  declarations: [
    AppComponent,
    PasajesComponent,
    NavbarComponent,
    NoticiasComponent,
    TraductorComponent,
    CategoriaDescuentoPipe,
    CategoriaPasajePipe,
    CrudnoticiaComponent,
    ViewlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AlifeFileToBase64Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
