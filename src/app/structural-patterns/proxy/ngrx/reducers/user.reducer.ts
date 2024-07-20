// reducers/user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User } from '../store/user.model';

export interface UserState {
  users: User[]; 
  loading: boolean;
  error: string ;
  success: any;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: 'error',
  success: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUser, state => ({ ...state, loading: true })),
  on(UserActions.loadUserSuccess, (state, { users }) => ({ ...state, users, loading: false})),
  on(UserActions.loadUserFailure, (state, { error }) => ({ ...state, error ,loading: false}))
); 