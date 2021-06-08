import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {decrease, increase, start, stop} from './reducers/nums';
import {Store} from '@ngrx/store';
import {interval} from 'rxjs';
import {switchMap, map, takeUntil} from 'rxjs/operators';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private store: Store) {
    }

    startChange$ = createEffect(() => this.actions$.pipe(
        ofType(start),
        switchMap(() =>
            interval(1000).pipe(
                takeUntil(this.actions$.pipe(ofType(stop))),
                map(() => {
                    this.store.dispatch(increase());
                    this.store.dispatch(decrease());
                    this.store.dispatch(decrease());
                })
            ))
        ),
        {dispatch: false});
}
