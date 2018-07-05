import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../../store';

import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-stat-company',
    templateUrl: './stat-company.component.html',
    styleUrls: ['./stat-company.component.scss']
})
export class StatCompanyComponent implements OnInit, OnDestroy {

    @select() companies$;

    companies: any;
    data: any;
    isUpdatingData = false;
    options: any = {
        responsive: true,
        title: {
            display: true,
        },
        legend: {
            display: false
        }
    };

    private linkStateToUserCompanies: Subscription;

    constructor(private ngRedux: NgRedux<IAppState>) {
    }

    ngOnInit() {
        this.isUpdatingData = true;

        this.linkStateToUserCompanies = this.companies$.subscribe((state = {}) => {
            this.companies = state;
            this.loadCompanyData();
        });
    }

    ngOnDestroy() {
        this.linkStateToUserCompanies.unsubscribe();
    }

    loadCompanyData() {

        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        const dataset = {
            label: '# of companies',
            borderColor: 'rgb(255, 99, 132)',
            pointRadius: 2,
            fill: false,
            data: [0, 0, 0, 0, 0, 0, this.companies.length]
        };
        this.data = {
            labels: labels,
            datasets: [dataset],
        };
        this.isUpdatingData = false;
    }

}
