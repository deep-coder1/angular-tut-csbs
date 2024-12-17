import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    // return null;
    // return 123;
    const [x] = args;
    // return value*70;
    return value*x;
  }

}
