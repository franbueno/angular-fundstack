import {browser, ExpectedConditions} from 'protractor';

export class Helpers {

    waitForPresenceOf(element: any) {
        browser.wait(ExpectedConditions.presenceOf(element));

        if (Array.isArray(element)) {
            for (const elem of element) {
                browser.wait(ExpectedConditions.presenceOf(elem));
            }
        } else {
            browser.wait(ExpectedConditions.presenceOf(element));
        }
    }

    waitForNotPresenceOf(element: any) {
        browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(element)));

        if (Array.isArray(element)) {
            for (const elem of element) {
                browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(elem)));
            }
        } else {
            browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(element)));
        }
    }

    waitForVisibilityOf(element: any) {
        browser.wait(ExpectedConditions.visibilityOf(element));

        if (Array.isArray(element)) {
            for (const elem of element) {
                browser.wait(ExpectedConditions.visibilityOf(elem));
            }
        } else {
            browser.wait(ExpectedConditions.visibilityOf(element));
        }
    }

    waitForClickable(element: any) {
        browser.wait(ExpectedConditions.elementToBeClickable(element));
    }

    waitForAngular() {
        browser.waitForAngular();
    }

}
