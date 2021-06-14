import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {numsReducer, NumsState} from './reducer';

export interface State {
  nums: NumsState;
}

export const appReducers: ActionReducerMap<State> = {
  nums: numsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
