import {createAction, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';

const borderStyle = (num: number): string => {
  if (num > 0) {
    return 'blue';
  } else if (num < 0) {
    return 'red';
  } else {
    return '';
  }
};

export const change = createAction('[NUMS] change');
export const increase = createAction('[NUMS] increase');
export const decrease = createAction('[NUMS] decrease');
export const reset = createAction('[NUMS] reset');
export const stop = createAction('[NUMS] stop');
export const start = createAction('[NUMS] start');


export interface NumsState {
  firstNum: number;
  secondNum: number;
  firstNumBorder: string;
  secondNumBorder: string;
  stop: boolean;
}

export const initialState: NumsState = {
  firstNum: -5,
  secondNum: 10,
  firstNumBorder: 'red',
  secondNumBorder: 'blue',
  stop: true
};

export const numsReducer = createReducer(
  initialState,
  on(increase, state => {
    const newNumValue = state.firstNum + 1;
    return {
      ...state,
      firstNum: newNumValue,
      firstNumBorder: borderStyle(newNumValue)
    };
  }),
  on(decrease, state => {
    const newNumValue = state.secondNum - 1;
    return {
      ...state,
      secondNum: newNumValue,
      secondNumBorder: borderStyle(newNumValue)
    };
  }),
  on(start, state => ({
    ...state,
    stop: false
  })),
  on(stop, state => ({
    ...state,
    stop: true
  })),
  on(reset, _ => initialState)
);

export const featureSelector = createFeatureSelector<NumsState>('nums');
export const firstNumSelector = createSelector(
  featureSelector,
  state => state.firstNum
);
export const secondNumSelector = createSelector(
  featureSelector,
  state => state.secondNum
);
export const firstNumBorderSelector = createSelector(
  featureSelector,
  state => state.firstNumBorder
);
export const secondNumBorderSelector = createSelector(
  featureSelector,
  state => state.secondNumBorder
);
