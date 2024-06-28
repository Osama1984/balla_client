import { createAction, props } from '@ngrx/store';
import { Category, categoryError } from '../../interfaces/category';

export const categoriesApiCategoriesSuccess = createAction('[CategoriesAPI] Categories Success', props<{ categories: Category[] }>());
export const categoriesApiCategoriesFailure = createAction('[CategoriesAPI] Categories Failure', props<{ error: categoryError }>());

