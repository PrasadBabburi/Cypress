import LoginPOM from "../POM/LoginPOM.cy";
import 'cypress-xpath';

describe('Log-In Module', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    let testdata;

    // Importing data from fixtures file
    before(() => {

        cy.fixture('Test_Data').then((data) => {
            testdata = data;
        })
        
    })

    const rand = new LoginPOM();
    let emailid = rand.generatestring();
    let randompassword = rand.generatestring();

    it('TC_01 Visit Home Page', () => {

        cy.visit(testdata.HomePageUrl);

        cy.wait(2000);
    })

    it('TC_02 Verify Student Access Log In Type available or not under login dropdown', () => {
        const login = new LoginPOM();
        login.clickonLogintypebutton();
        cy.wait(2000);

        cy.get('#header-dropdown-login > ul > :nth-child(1) > .dropdown-item').should('have.text', ' Student Access ');
        
    })

    it('TC_03 Verify  Client Access  Log In Type available or not under login dropdown', () => {

        cy.get('#header-dropdown-login > ul > :nth-child(2) > .dropdown-item').should('have.text', ' Client Access ');
        
    })

    it('TC_04 Verify the functionality of Selecting Student Access Login type', () => {

        const login = new LoginPOM();

        login.selectLogintype();
        cy.get('#v-pills-home-tab').should('have.text', 'Login as Student');

    })

    it('TC_05 Verify that user landed on Login as Student page or not', () => {

        cy.get('#v-pills-home-tab').should('have.text', 'Login as Student');

    })

    it('TC_06 Verify that User name field is presented or not on student login page', () => {

        cy.get(':nth-child(2) > .mb-2').should('have.text', 'UserName');
    })

    it('TC_07 Verify that Password field is presented or not on student login page', () => {

        cy.get('form > :nth-child(3) > .mb-2').should('have.text', 'Password');
    })

    it('TC_08 Veriify that Log in button presented or not on Student login page', () => {

        cy.get('.d-flex > .btn').should('have.text', 'Log In');
    })

    it('TC_09 Verify that Register button/link presented or not on Student login page', () => {

        cy.xpath("//a[@href='register.cfm']").should('have.text', 'Register');
    })

    it('TC_10 Verify that Forgot Password? button/link presented or not on Student login page', () => {

        cy.xpath("//a[@href='resetPassword.cfm']").should('have.text', 'Forgot Password?');
    })

    it('TC_11 Verify Login Functionality with Invalid User and Valid Password', () => {

        const login = new LoginPOM();
        
        login.clickonUserNametextbox(emailid + '@tempmail.com');
        cy.wait(2000);

        login.clickonPasswordtextbox(testdata.Password);
        cy.wait(2000);

        login.clickonLoginbutton();
    })

    it('TC_12 Verify Error messages when User Name is invalid', () => {

        //cy.xpath("//strong[normalize-space()='Email or password is invalid.']").should('have.text', 'Email or password is invalid.');
        cy.xpath("//div[@class='alert alert-danger']").invoke('text')
        .then((text) => {
            const expectedText = "Email or password is invalid. Please try again, or choose 'Forgot Password' below.";
            expect(text.trim()).to.equal(expectedText);
        })
    })

    it('TC_13 Verify Login functionality with Valid Email Id and Invalid password', () => {

        const login = new LoginPOM();

        login.clickonUserNametextbox('0ees09jzkn@bloheyz.com');
        cy.wait(2000);

        login.clickonPasswordtextbox(randompassword);
        cy.wait(2000);

        login.clickonLoginbutton();
    })

    it('TC_14 Verify Error messages when Password is invalid', () => {

        //cy.xpath("//strong[normalize-space()='Email or password is invalid.']").should('have.text', 'Email or password is invalid.');
        cy.xpath("//div[@class='alert alert-danger']").invoke('text')
        .then((text) => {
            const expectedText = "Email or password is invalid. Please try again, or choose 'Forgot Password' below.";
            expect(text.trim()).to.equal(expectedText);

        })
        cy.wait(2000);
    })

    it('TC_15 Verify Login functionality without Credentials', () => {

        const login = new LoginPOM();
        login.clickonLoginbutton();

        cy.get('#v-pills-home-tab').should('have.text', 'Login as Student');

    })

    it('TC_16 Verify Error messages when user tris to login without cred', () => {

        //cy.xpath("//strong[normalize-space()='Email or password is invalid.']").should('have.text', 'Email or password is invalid.');
        cy.xpath("//div[@class='alert alert-danger']").invoke('text')
        .then((text) => {
            const expectedText = "Email or password is invalid. Please try again, or choose 'Forgot Password' below.";
            expect(text.trim()).to.equal(expectedText);

        })
        cy.wait(2000);
    })
      // Verify login with Valid Credentials
    it('TC_17 Verify User Name text field input functionality', () => {

        const login = new LoginPOM();

        login.clickonUserNametextbox(testdata.UserName);
        cy.wait(2000);
    })

    it('TC_18 Verify Password text field input functionality', () => {

        const login = new LoginPOM();

        login.clickonPasswordtextbox(testdata.Password);
        cy.wait(2000);
    })

    it('TC_19 Verify Login button functionality', () => {

        const login = new LoginPOM();

        login.clickonLoginbutton();
    })

    it('TC_20 Verify user landed on Dashboard or not after login', () => {

        cy.get(':nth-child(1) > :nth-child(1) > .ms-0').should('have.text', 'My Dashboard');
    })
});