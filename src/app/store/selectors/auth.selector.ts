import { createSelector } from '@ngrx/store';
import { State } from '../states/auth.state'; // Adjust the path as per your project structure
import { User, userError } from '../../interfaces/user';

// Selector to get the entire auth state
export const selectAuthState = (state: { auth: State }) => state.auth;

// Selector to get the user from the auth state
export const selectUser = createSelector(
  selectAuthState,
  (authState: State) => authState.user // No need to wrap with 'of', return directly
);

// Selector to get the error from the auth state
export const selectError = createSelector(
  selectAuthState,
  (authState: State) => authState.error // Again, return directly without 'of'
);
