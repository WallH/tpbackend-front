import { Injectable } from '@angular/core';
import { Noticia } from '../models/noticia';
import { Pasaje } from '../models/pasaje';
import { GenericService } from './generic-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService extends GenericService<Noticia>{
  
  constructor() {
      super('noticias');
  }  
  
}
