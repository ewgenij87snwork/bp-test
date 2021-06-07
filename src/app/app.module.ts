import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreService} from './service/store.service';
import {ConnectorModule} from './components/connector.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ConnectorModule],
    providers: [StoreService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
