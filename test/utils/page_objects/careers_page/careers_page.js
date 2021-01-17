const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection.js");
const {browser} = require("protractor");
const {element} = require("protractor");
const {Key} = require("selenium-webdriver");

class CareersPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.epam.com/careers';
    }
    open() {
        return super.open(this.url);
    }
    getLocationDropDown() {
        return new Element('Get location arrow', 'span.select2-selection__arrow');
    }
    getLocationDropDownAction() {
        let locationDropDown = element(by.css('span.select2-selection__arrow'));
        browser.actions().click(locationDropDown).perform();
    }
    acceptCookie() {
        return new Element ('Click Accept Cookie', 'button.cookie-disclaimer__button');
    }
    acceptCookieAction() {
        let locationList = element(by.css('button.cookie-disclaimer__button'));
        browser.actions().click(locationList).perform();
    }
    selectLocation(location) {
        return new Element('Select location', `//li[text()='${location}']`, true).click();
    }
    getSkills() {
        return new Element('Expand Skills drop-down', `div.selected-params`);
    }
    getSkillsAction() {
        let locationDropDown = element(by.css('div.selected-params'));
        browser.actions().click(locationDropDown).perform();
    }
    getYoungSpecialist() {
        return new Element('Select Young Specialist', '//span[contains(text(), \'Young Specialists\')]', true)
    }
    getYoungSpecialistAction() {
        let locationDropDown = element(by.xpath('//span[contains(text(), \'Young Specialists\')]'));
        browser.actions().click(locationDropDown).perform();
    }
    inputAction() {
        let Input = element(by.css('#new_form_job_search_1445745853_copy-keyword'));
        browser.actions().click(Input).sendKeys(Key.SHIFT + 'software testing').perform();
    }
    getElement() {
        return new Collection('Get results', 'ul.selected-items li[data-value=\'Young Specialists\']');
    }

}

module.exports = CareersPage;