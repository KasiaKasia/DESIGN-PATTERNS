// effects/user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import * as UserActions from '../actions/user.actions';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      mergeMap(() => this.userService.getUser()
        .pipe(
          map(users => UserActions.loadUserSuccess({ users })),
          catchError(error => of(UserActions.loadUserFailure({ error })))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
