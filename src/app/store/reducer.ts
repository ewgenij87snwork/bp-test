import {createReducer, on} from '@ngrx/store';
import {decrease, increase, reset, start, stop} from './actions';

const borderStyle = (num: number): string => {
  if (num > 0) {
    return 'blue';
  } else if (num < 0) {
    return 'red';
  } else {
    return '';
  }
};

export interface NumsState {
  firstNum: number;
  secondNum: number;
  firstNumBorder: string;
  secondNumBorder: string;
}

export const initialState: NumsState = {
  firstNum: -5,
  secondNum: 10,
  firstNumBorder: 'red',
  secondNumBorder: 'blue'
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
  on(start, state => ({...state})),
  on(stop, state => ({...state})),
  on(reset, _ => initialState)
);
