import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FirstComponent} from './components/first/first.component';
import {SecondComponent} from './components/second/second.component';
import {StoreService} from "./service/store.service";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [BrowserModule],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
