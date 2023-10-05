class Thankyoupage{
    Thankyoupage_elements = {
        //getRegistrationsuccessmessage: () => cy.get(':nth-child(3) > .pnf-help'),
        //getThankyoupagecontent: () => cy.get(':nth-child(4) > .pnf-help'),
        getFindclassbutton: () => cy.get('[href="https://test.cascadetraining.com/courses/index.cfm"] > .btn'),
       // getFindclasstext: () => cy.get(':nth-child(1) > :nth-child(1) > .ms-0'),
        getHomebutton: () => cy.get('[href="https://test.cascadetraining.com/index.cfm"] > .btn'),
        getUserdropdown: () => cy.get(':nth-child(10) > .nav-link'),
        getLogoutbutton: () => cy.get('#header-dropdown-login > ul > :nth-child(5) > .dropdown-item')
    }
    // checkRegistrationsuccessmessage()
    // {
    //     this.Thankyoupage_elements.getRegistrationsuccessmessage();
    // }
    // checkThankyoupagecontent()
    // {
    //     this.Thankyoupage_elements.getThankyoupagecontent();
    // }
    clickonFindclassbutton()
    {
        this.Thankyoupage_elements.getFindclassbutton().click();
    }
    // verifyFindclasspage()
    // {
    //     this.Thankyoupage_elements.getFindclasstext();
    // }
    clickonHomebutton()
    {
        this.Thankyoupage_elements.getHomebutton().click({ force: true });
    }
    clickonUserdropdown()
    {
        this.Thankyoupage_elements.getUserdropdown().click();
    }
    clickonLogout()
    {
        this.Thankyoupage_elements.getLogoutbutton().click()
    }
}

export default Thankyoupage;