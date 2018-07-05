import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NgRedux} from '@angular-redux/store';
import {ChartModule} from 'angular2-chartjs';

import {StatCompanyComponent} from './stat-company.component';
import {ListCompanyComponent} from '../list-company/list-company.component';

describe('StatCompanyComponent', () => {

    let fixture: ComponentFixture<StatCompanyComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [StatCompanyComponent],
            imports: [ChartModule],
            providers: [NgRedux]
        });
    });

    it('should be created', () => {
        fixture = TestBed.createComponent(StatCompanyComponent);
        expect(fixture.componentInstance instanceof StatCompanyComponent).toBe(
            true,
            'should create StatCompanyComponent'
        );
    });
});
