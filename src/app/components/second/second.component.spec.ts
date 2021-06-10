import {ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {StoreService} from '../../service/store.service';
import {Nums} from '../../service/types';
import {FirstComponent} from '../first/first.component';

import {SecondComponent} from './second.component';

const firstNum = -5;
const secondNum = 10;

const storeServiceStub: Partial<StoreService> = {
  change(): Nums {
    return mockNums;
  },
  initNums(): Nums {
    return mockNums;
  }
};

describe('SecondComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [
        SecondComponent,
        FirstComponent]
    })
                 .compileComponents();
    await TestBed.overrideProvider(StoreService, {useValue: storeServiceStub});
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load nums on init', () => {
    expect(component.nums).toEqual(mockNums);
  });

  it('should could storeService.change from onStart()', fakeAsync(() => {
    spyOn(storeServiceStub, 'change')
      .and.returnValue(mockNums);
    component.onStart();
    tick(1000);
    fixture.detectChanges();
    expect(storeServiceStub.change).toHaveBeenCalled();
    discardPeriodicTasks();
  }));

  it('should reset nums on onReset()', () => {
    spyOn(storeServiceStub, 'initNums')
      .and.returnValue(mockNums);
    component.onReset();
    fixture.detectChanges();
    expect(component.nums).toEqual(mockNums);
  });
});
