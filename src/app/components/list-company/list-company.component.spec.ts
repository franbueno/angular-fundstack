import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgRedux} from '@angular-redux/store';
import {ListCompanyComponent} from './list-company.component';
import {StatCompanyComponent} from '../stat-company/stat-company.component';

describe('App', () => {

    let fixture: ComponentFixture<ListCompanyComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ListCompanyComponent],
            providers: [NgRedux]
        });
    });

    it('should be created', () => {
        fixture = TestBed.createComponent(ListCompanyComponent);
        expect(fixture.componentInstance instanceof ListCompanyComponent).toBe(
            true,
            'should create ListCompanyComponent'
        );
    });
});
