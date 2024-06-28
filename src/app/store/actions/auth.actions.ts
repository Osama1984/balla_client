import { createAction, props } from '@ngrx/store';
import { Address, User, userError, userInfo } from '../../interfaces/user';

export const authApiAuths = createAction('[AuthAPI] Auths');
export const authApiAuthsSuccess = createAction('[AuthAPI] Auths Success', props<{ user: User }>());
export const authApiAuthsFailure = createAction('[AuthAPI] Auths Failure', props<{ error: userError }>());

export const authCheckToken = createAction('[Auth] Auths Check Token', props<any>());
export const authTokenInvalid = createAction('[Auth] Auths Token Invalid', props<{ error: userError }>());
export const authAddUserInfo = createAction('[Auth] Auths Add User Info', props<{userInfo:userInfo}>());
export const authAddUserAddress = createAction('[Auth] Auths Add User Address', props<{userAddress:Address}>());
