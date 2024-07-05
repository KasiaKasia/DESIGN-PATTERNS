import { Component } from '@angular/core';
import { DataService } from '../../common/service/data.service';
import { map, take } from 'rxjs';


export abstract class JsonParser {
  abstract parse(text: string): any;
}
export interface ConvertStringToObject {
  description: string;
}

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrl: './proxy.component.scss',
  providers: [DataService]
})
export class ProxyComponent extends JsonParser {
  textData$ = this.dataService.getTextData()
    .pipe(
      take(1),
      map(val => this.parse(val))
    );

  constructor(private dataService: DataService) { super() }

  parse(value: string): ConvertStringToObject {
    if (typeof value === 'string') {
      return { description: value };
    }
    return value;
  }
}