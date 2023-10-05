class HomePagePOM{
    HomePage_Elements = {

        getSendbutton: () => cy.xpath("//button[@id='send-Btn']"),
        getSkipbutton: () => cy.xpath("//a[@type='button']"),
        getYourNametextbox: () => cy.xpath("//input[@name='pqrstNameabcdf']"),
        getEmailAddresstextbox: () => cy.xpath("//input[@name='jklmnemailefghi']"),
        getCitytextbox: () => cy.xpath("//input[@name='cdefgcityijklm']"),
        //getStatedropdown: () => cy.get(':nth-child(8) > .col-md-12 > .dropdown > .form-control'),
        //getStatedropdown: () => cy.get('select[name="uvwxylocationijklm"]').then(($dropdown) => {
        getSelectclasstypedropdown: () => cy.xpath("//select[@name='abcdeClassTypefghij']"),
        getTextmessagebox: () => cy.xpath("//textarea[@name='qrstmessagepyxws']")
        

    }

    enterYourName(YourName)
    {
        this.HomePage_Elements.getYourNametextbox().clear();
        this.HomePage_Elements.getYourNametextbox().type(YourName);
    }
    
    enterEmailAddress(EmailId)
    {
        this.HomePage_Elements.getEmailAddresstextbox().clear();
        this.HomePage_Elements.getEmailAddresstextbox().type(EmailId);
    }
    
    enterCityName(CityName)
    {
        this.HomePage_Elements.getCitytextbox().clear();
        this.HomePage_Elements.getCitytextbox().type(CityName);
    }

    // clickonStatedropdown()
    // {
    //     this.HomePage_Elements.getStatedropdown().select('California');
    // }

    clickonSelectClasstypedorpdown()
    {
        this.HomePage_Elements.getSelectclasstypedropdown().select('In-class', { force: true });
    }

    typeMessageontextbox(message)
    {
        this.HomePage_Elements.getTextmessagebox().clear();
        this.HomePage_Elements.getTextmessagebox().type(message);
    }

    clickonSendbutton()
    {
        this.HomePage_Elements.getSendbutton().click();
    }

    clickonSkipbutton()
    {
        this.HomePage_Elements.getSkipbutton().click();
    }
    selectRandomState() {
        cy.get('select[name="uvwxylocationijklm"]').then(($dropdown) => {
            const optionsCount = $dropdown.find('option').length;
            if (optionsCount > 0) {
                const randomIndex = Cypress._.random(0, optionsCount - 1);
                const optionText = $dropdown.find('option').eq(randomIndex).text();
                cy.get('select[name="uvwxylocationijklm"]').select(optionText);
            }
            else {
                throw new Error('No options found in the dropdown.');
            }
        });
    }
    
}

export default HomePagePOM;
