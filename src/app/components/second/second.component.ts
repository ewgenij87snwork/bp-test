import {Component} from '@angular/core';
import {interval} from 'rxjs';
import {switchMap, takeWhile} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {decrease, firstNumSelector, increase, reset, secondNumSelector} from '../../reducers/nums';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.scss']
})
export class SecondComponent {
    stop = false;

    interval = interval(1000);
    firstNum$ = this.store.select(firstNumSelector);
    secondNum$ = this.store.select(secondNumSelector);

    constructor(private store: Store) {
    }

    onStart(): void {
        this.stop = false;
        this.interval
            .pipe(
                takeWhile(() => !this.stop),
                switchMap(async () => {
                    this.store.dispatch(increase());
                    this.store.dispatch(decrease());
                    this.store.dispatch(decrease());
                }))
            .subscribe();
    }

    onReset(): void {
        this.store.dispatch(reset());
    }
}
