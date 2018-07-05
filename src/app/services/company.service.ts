import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CompanyService {

    constructor(private http: HttpClient) {
    }

    getCompanies(name: string): Observable<any[]> {
        return this.http.get<any[]>('https://autocomplete.clearbit.com/v1/companies/suggest?query=' + name);
    }
}
