import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productStatus'
})
export class ProductStatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
