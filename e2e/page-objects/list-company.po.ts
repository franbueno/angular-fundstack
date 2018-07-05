import {browser, by, element, protractor} from 'protractor';
import {Helpers} from '../helpers/helpers';

export class ListCompanyPage extends Helpers {

    getCompanies() {
        return element.all(by.css('.company-list'));
    }

    getDeleteButtonCompanies(index: number) {
        return element.all(by.css('.company-table__remove-btn')).get(index);
    }
}
