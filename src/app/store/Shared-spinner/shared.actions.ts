import { createAction, props } from '@ngrx/store';

//Constants => loadind-spinner
export const SET_LOADING_ACTION = '[shared state] set loading spinner true';
export const SET_LOADING_ACTION_SUCCESS = '[shared state successfull] set loading spinner false';
export const SET_LOADING_ACTION_FAIL = '[shared state fail] set loading spinner false';



export const SET_ERROR_MESSAGE = '[shared state] set error message';

export const setLoadingSpinner = createAction(
  SET_LOADING_ACTION,
  props<{ status: boolean }>()
);

export const setLoadingSpinnerSuccess = createAction(
  SET_LOADING_ACTION_SUCCESS,
  props<{ status: boolean }>()
);
export const setLoadingSpinnerFail = createAction(
  SET_LOADING_ACTION_FAIL,
  props<{ status: boolean }>()
);

export const setErrorMessage = createAction(
  SET_ERROR_MESSAGE,
  props<{ message: string }>()
);
