import HomePagePOM from '../POM/HomePagePOM.cy';
import RegistrationPOM from '../POM/RegistrationPOM.cy';
import 'cypress-xpath';
describe ('HomePage/ Survey form', ()=> {

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
      const rand = new RegistrationPOM();
      let emailid = rand.generatestring();

      it('TC_01 Navigate to Home Page', () => {
        cy.visit(testdata.HomePageUrl)

      })

      // Filling Survey Form for Users different location apart from CA, OR, WA

      it('TC_02 Verify Survey Page', () => {

        cy.xpath("//h1[@class='ms-0']").should('have.text', 'Survey');
      })

      // Verify Elements presents on Survey form

      it('TC_03 Verify Your Name Element present or not on Survey form', () => {
        
        cy.xpath("//input[@name='pqrstNameabcdf']").should('have.attr', 'placeholder', 'Your Name');
      })

      it('TC_04 Verify Email Address text field present or not on Survey page', () => {

        cy.xpath("//input[@name='jklmnemailefghi']").should('have.attr', 'placeholder', 'Email Address');
      })

      it('TC_04 Verify City text field present or not on Survey page', () => {

        cy.xpath("//input[@name='cdefgcityijklm']").should('have.attr', 'placeholder', 'City');
      })

      it('TC_05 Verify State Drop-down is present or not on Survey page', () => {
        //cy.xpath("//select[@placeholder='Location']").should('have.attr', 'palceholder', '--Select State--');
        //cy.xpath("//label[@for='uvwxylocationijklm']").should('have.text', 'State');
        cy.get('select[name="uvwxylocationijklm"] option[selected]').should('have.text', '--Select State--');
      })

      it('TC_06 Verify Class type drop-down presented or not on Survey page', () => {

        cy.get('select[name="abcdeClassTypefghij"] option[selected]').should('have.text', '--Select Class Type--');
        //cy.xpath("//select[@name='abcdeClassTypefghij']").should('have.value', '--Select Class Type--');
      })

      it('TC_07 Verify Which course would you like to enroll in? text box present or not on Survey page', () => {

        cy.get(':nth-child(10) > .col-md-12 > .form-group > #message').should('have.attr', 'placeholder', 'Please type here...');
      })

      it('TC_08 Verify send button presented on not on Survey page', () => {

        cy.xpath("//button[@id='send-Btn']").should('have.text', 'SEND');
      })

      it('TC_09 Verify Skip button present or not on Survey page', () => {
        cy.xpath("//a[@type='button']").should('have.text', 'SKIP');
      })

      it('TC_10 try submitting Survey without filling mamdatory fields', () => {

        const homepage = new HomePagePOM();
        cy.wait(2000);
        homepage.clickonSendbutton();
        cy.wait(3000);
        // Navigating backward
       // cy.go(-1);
       cy.xpath("//strong[normalize-space()='Please correct the following!']").should('have.text', 'Please correct the following!');
       //\nPlease enter required fields marked in red.\nPlease select the state\nPlease enter a valid Name\nPlease enter a valid Email Address\nPlease enter the message\nPlease select the class type\nPlease enter the city');
      })

      it('TC_11 Verify Your Name text box input functionality',() => {

        const homepage = new HomePagePOM();
        homepage.enterYourName(testdata.YourName);
      })

      it('TC_12 Verify Email Address text box input functionality', () => {

        const homepage = new HomePagePOM();
        homepage.enterEmailAddress(emailid + '@Outlook.com');
      })
      
      it('TC_13 Verify City text box input functionality', () => {

        const homepage = new HomePagePOM();
        homepage.enterCityName(testdata.Cityname);
      })

      it('TC_14 Select State from dropdown', () => {

        const homepage = new HomePagePOM();
        homepage.selectRandomState();
      })

      it('TC_15 Select Class type from drop-down', () => {

        const homepage = new HomePagePOM();
        homepage.clickonSelectClasstypedorpdown();
      })

      it('TC_16 Verify input text box for Which course would you like to enroll in?', () => {

        const homepage = new HomePagePOM();
        homepage.typeMessageontextbox(testdata.InputText);
      })

      it('TC_17 Verify Submit button after entering all mandatory data', () => {

        const homepage = new HomePagePOM();
        homepage.clickonSendbutton();
      })
})
