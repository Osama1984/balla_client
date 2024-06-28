import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { authReducer, State as AuthState, authFeatureKey } from '../states/auth.state';
import { categoriesReducer, State as CategoriesState, categoriesFeatureKey } from '../states/categories.state';
export interface RootState {
  [authFeatureKey]: AuthState;
  [categoriesFeatureKey]: CategoriesState;
}

export const reducers: ActionReducerMap<RootState> = {
  [authFeatureKey]: authReducer,
  [categoriesFeatureKey]: categoriesReducer,
};

export const metaReducers: MetaReducer<RootState>[] = environment.production ? [] : [];
