import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoriaDescuento'
})
export class CategoriaDescuentoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch(value)
    {
      case "M": return "25%";
      case "J": return "50%";
      case "A": return "NO";
    }
  }

}
