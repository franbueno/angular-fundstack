import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgRedux, select} from '@angular-redux/store';

// Services
import {CompanyService} from '../../services/company.service';

// Rxjs
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';

import {IAppState} from '../../store';
import {ADD_COMPANY} from '../../actions';

@Component({
    selector: 'app-new-company',
    templateUrl: './new-company.component.html',
    styleUrls: ['./new-company.component.scss']
})
export class NewCompanyComponent implements OnInit, OnDestroy {

    @select() companies$;

    companies: any;
    companyForm: FormGroup;
    date: Date;
    model: string;
    searching = false;
    searchFailed = false;

    private linkStateToUserCompanies: Subscription;

    constructor(private companyService: CompanyService,
                private ngRedux: NgRedux<IAppState>,
                private formbuilder: FormBuilder) {
    }

    ngOnInit() {
        this.date = new Date();
        this.date.setHours(0, 0, 0, 0);

        this.companyForm = this.formbuilder.group({
            id: 0,
            name: ['', Validators.required],
            domain: '',
            logo: '',
            created: this.date
        });

        this.linkStateToUserCompanies = this.companies$.subscribe((state = {}) => {
            this.companies = state;
        });
    }

    ngOnDestroy() {
        this.linkStateToUserCompanies.unsubscribe();
    }

    // Filter results
    search = (text$: Observable<string>) =>
        text$
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                tap(() => this.searching = true),
                switchMap(term => {
                    if (term.length > 0) {
                        return this.companyService.getCompanies(term).pipe(
                            tap(() => this.searchFailed = false),
                            catchError(() => {
                                this.searchFailed = true;
                                return Observable.of([]);
                            }));
                    } else {
                        return Observable.of(null);
                    }
                }),
                map(companies => {
                    if (companies && companies.length < 1) {
                        this.searchFailed = true;
                    } else {
                        return companies;
                    }
                }),
                tap(() => this.searching = false)
            )

    onCompanySelect(c: any) {
        if (this.checkNewCompanyName(c.item) === undefined) {
            c.item.id = 0;
            c.item.created = this.date;
            this.ngRedux.dispatch({type: ADD_COMPANY, company: c.item});
        }

        setTimeout(() => {
            this.model = '';
        });
    }

    onSubmit(company: any) {
        if (company.name && this.checkNewCompanyName(company) === undefined) {
            this.ngRedux.dispatch({type: ADD_COMPANY, company: company});
        }

        this.searchFailed = false;

        setTimeout(() => {
            this.model = '';
        });
    }

    checkNewCompanyName(company: any) {
        const searchCompany = this.companies.filter(x => x.name === company.name)[0];
        return searchCompany;
    }

}
