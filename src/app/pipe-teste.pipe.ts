import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTeste'
})
export class PipeTestePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(args)
    return value.substring(0,3) + ' ';
  }

}
