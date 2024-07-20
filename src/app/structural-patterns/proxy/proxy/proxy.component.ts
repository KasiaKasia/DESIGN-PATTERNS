import { Component } from '@angular/core';
import { DataService } from '../../common/service/data.service';
import { map, Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, User } from '../ngrx/store/user.model';
import * as UserActions  from '../ngrx/actions/user.actions';
 
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
  users$!: Observable<User[]>;
  isLoading$: Observable<boolean>;
  textData$ = this.dataService.getTextData()
    .pipe(
      take(1),
      map(val => this.parse(val))
    );

  constructor(private dataService: DataService, public store: Store<AppState>) {
    super()
    this.users$ = this.store.select((state) => state.user.users);
    this.isLoading$ = this.store.select(state => state.user.loading);
    this.loadUsers();

  }

  parse(value: string): ConvertStringToObject {
    if (typeof value === 'string') {
      return { description: value };
    }
    return value;
  }
  loadUsers() {
    this.store.dispatch(UserActions.loadUser());
    }
}