import {createFeatureSelector, createSelector} from '@ngrx/store';
import {NumsState} from './reducer';

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
