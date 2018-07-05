import {TestBed, inject} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';

import {NewCompanyComponent} from './new-company.component';
import {CompanyService} from '../../services/company.service';

describe('NewCompanyComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NewCompanyComponent],
            imports: [HttpClientModule, ReactiveFormsModule, NgbTypeaheadModule],
            providers: [CompanyService]
        });
    });
    it('should be created', inject([CompanyService], (service: CompanyService) => {
        expect(service).toBeTruthy();
    }));
});
