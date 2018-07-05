import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ChartModule} from 'angular2-chartjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgRedux, NgReduxModule} from '@angular-redux/store';

// Components
import {AppComponent} from './app.component';
import {NewCompanyComponent} from './components/new-company/new-company.component';
import {ListCompanyComponent} from './components/list-company/list-company.component';
import {StatCompanyComponent} from './components/stat-company/stat-company.component';

import { IAppState, rootReducer, INITIAL_STATE } from './store';

// Ng bootstrap
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';

// Services
import {CompanyService} from './services/company.service';

@NgModule({
    declarations: [
        AppComponent,
        NewCompanyComponent,
        ListCompanyComponent,
        StatCompanyComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ChartModule,
        FormsModule,
        NgReduxModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgbTypeaheadModule.forRoot(),
    ],
    providers: [
        CompanyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}
