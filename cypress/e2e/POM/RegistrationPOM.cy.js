class RegistrationPOM{
    Registration_elements = {

        getSkipbutton: () => cy.get('a.cold-md-4'),
        getRegistrationbutton: () => cy.get(':nth-child(11) > a > .btn'),
        getFirstNametextfield: () => cy.get('#fname'),
        getLastNametextfield: () => cy.get('#lname'),
        getAddresstextfield: () => cy.get('#Address1'),
        getAddress2textfield: () => cy.get('#Address2'),
        getCitytextfield: () => cy.get('#City'),
        getStatedropdown: () => cy.get(':nth-child(1) > :nth-child(6) > .dropdown > .form-control'),
        getZipcodetextbox: () => cy.get('#postal_code'),
        getPhonetextbox: () => cy.get('#Phone'),
        getCelltextbox: () => cy.get('#Cell'),
        getEmailtextbox: () => cy.get('#Email'),
        getPasswordtextbox: () => cy.get('#Password'),
        getTimezonedropdown: () => cy.get(':nth-child(3) > .dropdown > .form-control'),
        getHowdidyouhearaboutusdropdown: () => cy.get(':nth-child(4) > .dropdown > .form-control'),
        getAreyouahealthcareprovider: () => cy.get('.ps-3 > input'),
        getRegisterbutton: () => cy.get('.justify-content-end > .btn')

        //getStatedropdown: () => cy.get(':nth-child(1) > :nth-child(6) > .dropdown > .form-control'),
        //cy.xpath("/html/body/div[1]/div/div[2]/form/div/div[1]/div[6]/div/select/option[6]")
        //cy.get('.class="form-control"'),
    }

    clickonSkipbutton()
    {
        this.Registration_elements.getSkipbutton().click();
    }
    clickonRegistrationbutton()
    {
        this.Registration_elements.getRegistrationbutton().click();


    }
    typeFirstName(FirstName)
    {
        //this.Registration_elements.getFirstNametextfield().clear();
        this.Registration_elements.getFirstNametextfield().type(FirstName, {force: true});
    }
    typeLastName(LastName)
    {
        this.Registration_elements.getLastNametextfield().type(LastName, {force: true});
    }
    typeAddress(Address)
    {
        this.Registration_elements.getAddresstextfield().type(Address, {force: true});
    }
    typeAddress2(Address2)
    {
        this.Registration_elements.getAddress2textfield().type(Address2, {force: true});
    }
    typeCity(Cityname)
    {
        this.Registration_elements.getCitytextfield().type(Cityname, {force: true});
    }
    clickonStatedropdown()
    {
        this.Registration_elements.getStatedropdown().select('California', { force: true });
    }
    enterZipcode(Zipcode)
    {
        this.Registration_elements.getZipcodetextbox().type(Zipcode, {force: true});
    }
    enterPhonenumber(PhoneNum)
    {
        this.Registration_elements.getPhonetextbox().type(PhoneNum, {force: true});
    }
    enterCellnumber(CellNum)
    {
        this.Registration_elements.getCelltextbox().type(CellNum, {force: true});
    }
    enterEmail(Email)
    {
        this.Registration_elements.getEmailtextbox().type(Email, {force: true});
    }
    enterPassword(Password)
    {
        this.Registration_elements.getPasswordtextbox().type(Password, {force: true});
    }
    selectTimezone(timezone)
    {
        this.Registration_elements.getTimezonedropdown().select('Eastern Time Zone', {force:true});
    }
    selectHowdidyouhearaboutus()
    {
        this.Registration_elements.getHowdidyouhearaboutusdropdown().select('Cascade Web Site', {force:true});
    }
    answerAreyouahealthcareprovider()
    {
        this.Registration_elements.getAreyouahealthcareprovider().click();
    }
    clickonRegisterbutton()
    {
        this.Registration_elements.getRegisterbutton().click();
    }
    generatestring() {

        let r = (Math.random()).toString(36).substring(7);

        console.log("random", r);

        return r
    }

}


export default RegistrationPOM;