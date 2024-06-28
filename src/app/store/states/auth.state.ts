import { createReducer, on, Action } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { User, userError } from '../../interfaces/user';

export const authFeatureKey = 'auth';

export interface State {
  user: User|null;
  error: userError|null;
}

export const initialState: State = {
  user:null,
  error: null
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.authApiAuthsSuccess, (state, { user }) => ({ ...state, user })),
  on(AuthActions.authApiAuthsFailure, (state, { error }) => ({ ...state, error })),
);

export function authReducer(state: State | undefined, action: Action) {
  return _authReducer(state, action);
}
