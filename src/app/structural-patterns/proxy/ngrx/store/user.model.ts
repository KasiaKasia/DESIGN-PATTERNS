import { Action, ActionReducer } from "@ngrx/store";
import { userReducer, UserState } from "../reducers/user.reducer";
import { UserEffects } from "../effects/user.effects";
export interface User {
  id: number | string;
  name: string;
}
export interface AppState {
  user: UserState;
}
export interface AppStore {
  user: ActionReducer<UserState, Action>;
}

export const appStore: AppStore = {
  user: userReducer
}

export const appEffects = [UserEffects];