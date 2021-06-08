import {Component} from '@angular/core';
import {Nums} from '../../service/types';
import {interval} from 'rxjs';
import {map, takeWhile} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {decrease, increase} from '../../reducers/nums';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.scss']
})
export class SecondComponent {
    nums: Nums = null;
    stop = false;

    constructor(private store: Store) {
    }

    interval = interval(1000);

    onStart(): void {
        this.stop = false;
        this.interval
            .pipe(
                takeWhile(() => !this.stop),
                map(async () => {
                    this.store.dispatch(increase());
                    this.store.dispatch(decrease());
                    this.store.dispatch(decrease());
                }))
            .subscribe();
    }

    onReset(): void {
    }
}
