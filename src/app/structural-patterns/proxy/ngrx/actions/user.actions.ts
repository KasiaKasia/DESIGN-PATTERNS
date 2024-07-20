import { createAction, props } from '@ngrx/store';
import { User } from '../store/user.model';

export const loadUser = createAction('[User] Load User');
export const loadUserSuccess = createAction('[User] Load User Success', props<{ users: User[] }>());
export const loadUserFailure = createAction('[User] Load User Failure', props<{ error: string  }>());
