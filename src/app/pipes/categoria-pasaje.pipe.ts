import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoriaPasaje'
})
export class CategoriaPasajePipe implements PipeTransform {

  transform(value:string, ...args: unknown[]): string {
    switch(value)
    {
      case "M": return "Menor";
      case "J": return "Jubilado";
      case "A": return "Adulto";
    }
  }

}
