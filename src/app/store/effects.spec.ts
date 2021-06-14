import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Store, StoreModule} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {Observable} from 'rxjs';

import {Effects} from './effects';
import {initialState} from './reducer';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        Effects,
        Store,
        provideMockStore({ initialState }),
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(Effects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
