import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudnoticiaComponent } from './views/crudnoticia/crudnoticia.component';
import { NoticiasComponent } from './views/noticias/noticias.component';
import { PasajesComponent } from './views/pasajes/pasajes.component';
import { TraductorComponent } from './views/traductor/traductor.component';
import { ViewlogsComponent } from './views/viewlogs/viewlogs.component';

const routes: Routes = [
  {
    path:'', component:NoticiasComponent 
  },
  {
    path:'modnoticia',
    component:CrudnoticiaComponent
  },
  {
    path:'logstraducciones',
    component:ViewlogsComponent
  },
  {path:'traductor', component:TraductorComponent},
  {
    path:'pasajes', component:PasajesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
