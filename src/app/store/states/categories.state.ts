import { createReducer, on, Action } from '@ngrx/store';
import * as CategoriesActions from '../actions/categoris.action';
import { Category, categoryError } from '../../interfaces/category';

export const categoriesFeatureKey = 'categories';

export interface State {
  categories: Category[];
  error: categoryError;
}

export const initialState: State = {
  categories: [{
    category_name:'',
    category_id:'',
    category_image:'',
    category_description:'',
  }],
  error: {message:''}
};

const _categoriesReducer = createReducer(
  initialState,
  on(CategoriesActions.categoriesApiCategoriesSuccess, (state, { categories }) => ({ ...state, categories })),
  on(CategoriesActions.categoriesApiCategoriesFailure, (state, { error }) => ({ ...state, error }))
);

export function categoriesReducer(state: State | undefined, action: Action) {
  return _categoriesReducer(state, action);
}
