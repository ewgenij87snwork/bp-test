import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {numsReducer, NumsState} from './reducer';

export interface State {
  nums: NumsState;
}

export const reducers: ActionReducerMap<State> = {
  nums: numsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
