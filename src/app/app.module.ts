import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {Effects} from './store/effects';
import {ConnectorModule} from './components/connector.module';
import {metaReducers, appReducers} from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConnectorModule,
    StoreModule.forRoot(appReducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([Effects])],
  bootstrap: [AppComponent]
})
export class AppModule {
}
