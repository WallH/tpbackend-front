import { Injectable } from '@angular/core';
import { LogTraductor } from '../models/logtraductor';
import { Noticia } from '../models/noticia';
import { Pasaje } from '../models/pasaje';
import { GenericService } from './generic-service.service';
import axios from "axios";
declare var $:any;
@Injectable({
  providedIn: 'root'
})
export class LogTraductorService extends GenericService<LogTraductor>{
  
  constructor() {
      super('traduccion');
  }  
  
  async getFilter(filter){

    return await axios.get(this.urlFinal + `?${$.param(filter)}`, {
      withCredentials: true
    });
  }
}
