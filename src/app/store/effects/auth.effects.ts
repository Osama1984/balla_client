import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';
import { User, userInfo } from '../../interfaces/user';
import { Store, select } from '@ngrx/store';
import { selectAuthState } from '../selectors/auth.selector';
import { State } from '../states/auth.state';

@Injectable()
export class AuthEffects {

  constructor(
    private store: Store<{ auth: State }>,
    private actions$: Actions,
    private router: Router
  ) {}

  checkToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authCheckToken),
      switchMap(() => {
        const token = localStorage.getItem('token');
        if (!token || token === undefined) {
          return of(AuthActions.authApiAuthsFailure({ error: { message: "No token found" } }));
        } else {
          const user: User = {
            username: '',
            email: '',
            password: '',
            profile_image: null,
            phone: '',
            address: {
              address: '',
              zip: '',
              city: '',
              country: '',
              state: ''
            }
          };
          return of(AuthActions.authApiAuthsSuccess({ user: user }));
        }
      }),
    )
  );

  addUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authAddUserInfo),
      switchMap((action) => {
        const user: User = {
          username: action.userInfo.username,
          email: action.userInfo.email,
          password: action.userInfo.password,
          profile_image: action.userInfo.profile_image,
          phone: action.userInfo.phone,
          address: {
            address: '',
            zip: '',
            city: '',
            country: '',
            state: ''
          }
        };
        return of(AuthActions.authApiAuthsSuccess({ user: user }));
      })
    ),
    { dispatch: true }
  );

  addUserAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authAddUserAddress),
      withLatestFrom(this.store.pipe(select(selectAuthState))),
      switchMap(([action, authState]) => {
        const updatedUser: User = {
          ...authState.user,
          address: action.userAddress
        };
        return of(AuthActions.authApiAuthsSuccess({ user: updatedUser }));
      })
    ),
    { dispatch: true }
  );
}
