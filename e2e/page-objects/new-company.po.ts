import {browser, by, element, protractor} from 'protractor';
import {Helpers} from '../helpers/helpers';

export class NewCompanyPage extends Helpers {

    newCompanyTitleField = element(by.css('.type-ahead'));

    getSelectedCompanies(index: number) {
        return element.all(by.css('.dropdown-item')).get(index);
    }

    createNewCompany(title) {
        this.newCompanyTitleField
            .isPresent()
            .then(() => {
                this.newCompanyTitleField.sendKeys(title);
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
            });
    }

    searchAddNewCompany(title) {
        this.newCompanyTitleField
            .isPresent()
            .then(() => {
                this.newCompanyTitleField.sendKeys(title);
                this.getSelectedCompanies(0).click();
            });
    }
}
