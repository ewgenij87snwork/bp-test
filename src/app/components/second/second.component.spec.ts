import {ComponentFixture, TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Store, StoreModule} from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {Observable} from 'rxjs';
import {Effects} from '../../store/effects';
import {initialState} from '../../store/reducer';
import {SecondComponent} from './second.component'

describe('SecondComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;
  let store: MockStore;
  let actions$: Observable<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [SecondComponent],
      providers: [
        Effects,
        Store,
        provideMockStore({ initialState }),
        provideMockActions(() => actions$)
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
