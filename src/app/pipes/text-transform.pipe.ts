import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform'
})
export class TextTransformPipe implements PipeTransform {

  transform(
    value: string,
    prefix: string,
    operator: 'uppercase' | 'lowercase' = 'uppercase'
  ): string {
    console.log('TextTransform', value);

    value = !value ? prefix : prefix + ' ' + value;

    switch (operator) {
      case 'uppercase':
        return value.toUpperCase();
      default:
        return value.toLowerCase();
    }
  }

}
