import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  reset,
  start,
  stop
} from '../../store/actions';
import {
  firstNumBorderSelector,
  firstNumSelector,
  secondNumBorderSelector,
  secondNumSelector
} from '../../store/selectors';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  firstNum$ = this.store.select(firstNumSelector);
  firstNumBorder$ = this.store.select(firstNumBorderSelector);
  secondNum$ = this.store.select(secondNumSelector);
  secondNumBorder$ = this.store.select(secondNumBorderSelector);

  constructor(private store: Store) {
  }

  onStart(): void {
    this.store.dispatch(start());
  }

  onStop(): void {
    this.store.dispatch(stop());
  }

  onReset(): void {
    this.store.dispatch(reset());
  }
}
