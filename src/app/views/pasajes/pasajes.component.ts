import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajesServiceService } from 'src/app/services/pasajes-service.service';

@Component({
  selector: 'app-pasajes',
  templateUrl: './pasajes.component.html',
  styleUrls: ['./pasajes.component.css']
})
export class PasajesComponent implements OnInit {
  pasajes: Array<Pasaje>;
  newPasaje:Pasaje;
  precioPasaje = 0.0;
  precioPasajeCalculado = 0;
  muestro = 0;
  resumen = 
  {
    "M":
    {
      label:"Menor",
      total:0,
      totalDinero:0,
    },
    "A":
    {
      label:"Adulto",
      total:0,
      totalDinero:0,
    },
    "J":
    {
      label:"Jubilado",
      total:0,
      totalDinero:0,
    }
  };
  
  constructor(private pasajeService: PasajesServiceService) {
    this.newPasaje = new Pasaje(0,0,"",);
    this.newPasaje.categoriaPasajero = "";
    this.pasajes = pasajeService.pasajes; 
   }

  ngOnInit() {
  }

  calcularPrecio()
  {
    if(this.precioPasaje > 0 && this.newPasaje.categoriaPasajero != "")
    {
      this.muestro = 1;
      this.newPasaje.fechaCompra = new Date();
      if(this.newPasaje.categoriaPasajero == "A") this.precioPasajeCalculado= this.precioPasaje;
      else this.precioPasajeCalculado = (this.newPasaje.categoriaPasajero == "M") ? this.precioPasaje*0.75 : this.precioPasaje*0.50;
      this.newPasaje.precioPasaje = this.precioPasajeCalculado;
      return;
    }
    this.muestro = 0;
  }

  registrarPasaje()
  {
    this.newPasaje.fechaCompra = Date.now();
    this.pasajes = this.pasajeService.agregarPasaje(this.newPasaje);
    this.actualizarResumen();
    this.muestro = 0;
    this.newPasaje = new Pasaje(0,0,"",);
    this.rerender();

  }
  
  removePasaje(pasaje)
  {
    this.pasajes = this.pasajeService.removerPasaje(pasaje);
    this.rerender();
  }
  
  rerender():void
  {
  }

  actualizarResumen()
  {
    for(let pasaje of this.pasajes)
    {
      this.resumen[pasaje.categoriaPasajero].total++;
      this.resumen[pasaje.categoriaPasajero].totalDinero+=pasaje.precioPasaje;      
    }
  }
}
