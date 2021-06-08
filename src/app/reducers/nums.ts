import {createAction, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';

export const change = createAction('[NUMS] change');
export const increase = createAction('[NUMS] increase');
export const decrease = createAction('[NUMS] decrease');
export const reset = createAction('[NUMS] reset');

export interface NumsState {
    firstNum: number;
    secondNum: number;
}

export const initialState: NumsState = {
    firstNum: -5,
    secondNum: 10
};

export const numsReducer = createReducer(
    initialState,
    on(increase, state => ({
        ...state,
        firstNum: state.firstNum + 1
    })),
    on(decrease, state => ({
        ...state,
        secondNum: state.secondNum - 1
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
