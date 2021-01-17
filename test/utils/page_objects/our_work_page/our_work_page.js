const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");

class OurWorkPage extends BasePage {
    constructor() {
      super();
      this.url = "https://www.epam.com/our-work";
      this.ourWorkTitle = new Element("Our Work Title", ".title--mixed-case.color-almost-black");  
    };
    open() {
      return super.open(this.url);
    }
    scrollToImage(element) {
        browser.executeScript('arguments[0].scrollIntoView();', element);
    }
    clickImage(element) {
        browser.executeScript('arguments[0].click();', element);
    }
}

module.exports = OurWorkPage;