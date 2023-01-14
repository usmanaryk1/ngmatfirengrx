import { setLoadingSpinner, setErrorMessage, setLoadingSpinnerSuccess, setLoadingSpinnerFail } from './shared.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, SharedState } from './shared.state';

const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setLoadingSpinnerSuccess, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setLoadingSpinnerFail, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  //firebase error
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  })
);


export function SharedReducer(state:SharedState=initialState, action: Action): SharedState {
  return _sharedReducer(state as SharedState, action as Action);
}
