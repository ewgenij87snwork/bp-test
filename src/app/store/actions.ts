import {createAction} from '@ngrx/store';

export const change = createAction('[NUMS] change');
export const increase = createAction('[NUMS] increase');
export const decrease = createAction('[NUMS] decrease');
export const reset = createAction('[NUMS] reset');
export const stop = createAction('[NUMS] stop');
export const start = createAction('[NUMS] start');
