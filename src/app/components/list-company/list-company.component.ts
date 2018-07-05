import {Component, OnInit} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../../store';
import {REMOVE_COMPANY} from '../../actions';

@Component({
    selector: 'app-list-company',
    templateUrl: './list-company.component.html',
    styleUrls: ['./list-company.component.scss']
})
export class ListCompanyComponent implements OnInit {

    @select() companies;

    constructor(private ngRedux: NgRedux<IAppState>) {
    }

    ngOnInit() {
    }

    deleteCompany(company) {
        this.ngRedux.dispatch({type: REMOVE_COMPANY, id: company.id});
    }
}
