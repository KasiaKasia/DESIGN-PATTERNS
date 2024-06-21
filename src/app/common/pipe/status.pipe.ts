import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../model/model';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(value: number): string {
    return Status[value] || 'unknown status';
  }

}
