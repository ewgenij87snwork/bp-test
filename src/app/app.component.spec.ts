import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SecondComponent} from "./components/second/second.component";
import {Component} from "@angular/core";
import {FirstComponent} from "./components/first/first.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SecondComponent,
        FirstComponent
      ],
    }).compileComponents();
  });

  @Component({
    selector: 'app-second',
    template: ''
  })
  class MockSecondComponent {
  }
  @Component({
    selector: 'app-first',
    template: ''
  })
  class MockFirstComponent {
  }
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bandapixels-sorokin'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bandapixels-sorokin');
  });
});
