import { Pipe, PipeTransform } from '@angular/core';
import { Types } from '../model/model';

@Pipe({
  name: 'types',
})
export class TypesPipe implements PipeTransform {

  transform(value: number): string {
    return Types[value] || 'unknown type';
  }
}
