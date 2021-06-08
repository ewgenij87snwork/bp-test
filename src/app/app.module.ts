import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreService} from './service/store.service';
import {ConnectorModule} from './components/connector.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ConnectorModule,
        StoreModule.forRoot(reducers, {
      metaReducers
    }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })],
    providers: [StoreService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
