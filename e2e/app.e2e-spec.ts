import {browser, protractor} from 'protractor';
import {AppPage} from './page-objects/app.po';
import {NewCompanyPage} from './page-objects/new-company.po';
import {ListCompanyPage} from './page-objects/list-company.po';

describe('client App', () => {
    let appPage: AppPage;
    let newCompanyPage: NewCompanyPage;
    let listCompanyPage: ListCompanyPage;

    const companyTitle = 'this is a new company';
    const companySearchTitles = ['Facebook', 'Google', 'Fundstack'];

    beforeAll(() => {
        appPage = new AppPage();
        newCompanyPage = new NewCompanyPage();
        listCompanyPage = new ListCompanyPage();
    });

    it('should display welcome message', () => {
        appPage.navigateTo();
        expect(appPage.getParagraphText()).toEqual('Fundstack Challenge 🤟');
    });

    describe('when user create a new company', () => {
        beforeAll(() => {
            newCompanyPage.waitForVisibilityOf(newCompanyPage.newCompanyTitleField);
            newCompanyPage.createNewCompany(companyTitle);
        });

        it('then company should be listed', () => {
            listCompanyPage.getCompanies().count().then(function (count) {
                expect(count).toBe(1);
            });
        });

        it('then company should be removed', () => {

            browser.actions().mouseDown(listCompanyPage.getDeleteButtonCompanies(0)).perform();
            listCompanyPage.waitForVisibilityOf(listCompanyPage.getDeleteButtonCompanies(0));
            listCompanyPage.getDeleteButtonCompanies(0).click();

            listCompanyPage.getCompanies().count().then(function (count) {
                expect(count).toBe(0);
            });
        });

    });

    describe('when user select three new companies', () => {
        beforeAll(() => {
            newCompanyPage.waitForVisibilityOf(newCompanyPage.newCompanyTitleField);
            newCompanyPage.searchAddNewCompany(companySearchTitles[0]);
            newCompanyPage.searchAddNewCompany(companySearchTitles[1]);
            newCompanyPage.searchAddNewCompany(companySearchTitles[2]);
        });

        it('then company should be listed', () => {
            listCompanyPage.getCompanies().count().then(function (count) {
                expect(count).toBe(3);
            });
        });

        it('then company should be removed', () => {

            browser.actions().mouseDown(listCompanyPage.getDeleteButtonCompanies(0)).perform();
            listCompanyPage.waitForVisibilityOf(listCompanyPage.getDeleteButtonCompanies(0));
            listCompanyPage.getDeleteButtonCompanies(0).click();

            browser.actions().mouseDown(listCompanyPage.getDeleteButtonCompanies(0)).perform();
            listCompanyPage.waitForVisibilityOf(listCompanyPage.getDeleteButtonCompanies(0));
            listCompanyPage.getDeleteButtonCompanies(0).click();

            browser.actions().mouseDown(listCompanyPage.getDeleteButtonCompanies(0)).perform();
            listCompanyPage.waitForVisibilityOf(listCompanyPage.getDeleteButtonCompanies(0));
            listCompanyPage.getDeleteButtonCompanies(0).click();

            listCompanyPage.getCompanies().count().then(function (count) {
                expect(count).toBe(0);
            });
        });

    });

});
