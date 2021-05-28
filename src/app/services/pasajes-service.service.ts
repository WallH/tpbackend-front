import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajesServiceService {
  pasajes: Array<Pasaje> = new Array<Pasaje>();
  
  constructor() {
    if(this.pasajes == null || undefined)
    {
      this.pasajes = new Array<Pasaje>();
    }
  }

  agregarPasaje(pasaje)
  {
    this.pasajes.push(pasaje);
    return this.pasajes;
  }

  removerPasaje(pasaje)
  {
    this.pasajes.splice(this.pasajes.indexOf(pasaje), 1);
    return this.pasajes;
  }
  
  
}
