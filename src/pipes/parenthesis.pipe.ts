import { Pipe, PipeTransform } from '@angular/core';

/*
 * Usage:
 *   value | paren
 * Example:
 *   {{ 'foo' | paren }}
 *   formats to: '（foo）'
*/
@Pipe({
  name: 'paren'
})
export class ParenthesisPipe implements PipeTransform {
  transform(value: string, zenkaku: boolean = true): string {
    if (value === '') {
      return '';
    }
    if (zenkaku) {
      return '（' + value + '）';
    }
    return '(' + value + ')';
  }
}