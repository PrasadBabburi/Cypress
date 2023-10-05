import RegistrationPOM from "../POM/RegistrationPOM.cy";
import Thankyoupage from "../POM/ThankyoupagePOM.cy";
import 'cypress-xpath';

describe('Registration Flow', ()=> {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false

        // cy.fixture('Test_Data').then((data) => {
        //     testdata = data;
        // })
    });
    const rand = new RegistrationPOM();
    let emailid = rand.generatestring();

    let testdata;

    before(() => {

        cy.fixture('Test_Data').then((data) => {
            testdata = data;
            
          })
      
      })


      //Visiting Application's Home Page : https://test.cascadetraining.com/


      //Un-Comment this when executing Registration Module individually
      it('TC_01 Visit Home Page', ()=> {

        //cy.visit(testdata.HomePageUrl)
        cy.visit(testdata.HomePageUrl);
        // To Handle auto URL redirection
       // cy.url().should('eq', 'https://test.cascadetraining.com/class-query.cfm')
        cy.wait(5000);
    }) 


    // To Skip the Survey for different for hosts which are not from CA, OR, WA IPs

    //Un-Comment this when executing Registration Module individually
     it('TC_02 Click on Skip button', () => {
        const registration = new RegistrationPOM();
        registration.clickonSkipbutton();
        // To Handle auto URL redirection after clicking on Skip button presented on Survey page
       // cy.url().should('eq', 'https://test.cascadetraining.com//index.cfm');
        cy.wait(3000);
     })


    it('TC_03 Click On Registration', () => {

        cy.wait(5000);
        const registration = new RegistrationPOM();

        registration.clickonRegistrationbutton();
        // To Handle auto URL redirection after clicking on register link presented on home page
        cy.url().should('eq', 'https://test.cascadetraining.com/courses/sso/register.cfm')
    })
    it('TC_04 Enter First Name', () => {

        cy.wait(5000);
        const registration = new RegistrationPOM();

        registration.typeFirstName(testdata.Firstname);
    })

    it('TC_05 Enter Last Name', () => {

        cy.wait(5000);
        const registration = new RegistrationPOM();

        //registration.typeLastname(testdata.Lastname);
        registration.typeLastName(testdata.Lastname);
    })
    it('TC_06 Enter Address1', () => {

        cy.wait(5000);
        const registration = new RegistrationPOM();

        registration.typeAddress(testdata.Address);
    })
    it('TC_07 Enter Address2', () => {

        cy.wait(5000);
        const registration = new RegistrationPOM();

        registration.typeAddress2(testdata.Address2);
    })
    it('TC_08 Enter Cityname', () => {

        cy.wait(5000);
        const registration = new RegistrationPOM();

        registration.typeCity(testdata.City);
    })

    it('TC_09 Select State', () => {
        cy.wait(3000);

        const registration = new RegistrationPOM();
        registration.clickonStatedropdown();

    })
    it('TC_10 Enter ZipCode', () => {

        cy.wait(5000);
        const registration = new RegistrationPOM();

        registration.enterZipcode(testdata.ZipCode);
    })
    it('TC_11 Enter PhoneNumber', () => {

        cy.wait(5000);
        const registration = new RegistrationPOM();

        registration.enterPhonenumber(testdata.Phone);
    })
    it('TC_12 Enter CellNumber', () => {

        cy.wait(5000);
        const registration = new RegistrationPOM();

        registration.enterCellnumber(testdata.Cell);
    })
    it('TC_13 Enter Emaild Id', () => {

        cy.wait(5000);
        const registration = new RegistrationPOM();

        registration.enterEmail(emailid + '@writeme.com');
    })
    it('TC_14 Enter New Password', () => {

        cy.wait(5000);
        const registration = new RegistrationPOM();

        registration.enterPassword(testdata.SetPassword);
    })
    it('TC_15 Select Timezone from ', () => {

        cy.wait(5000);
        const registration = new RegistrationPOM();

        registration.selectTimezone();
    })
    it('TC_16 Select option from How did you hear about us drop-down', () => {

        cy.wait(5000);
        const registration = new RegistrationPOM();

        registration.selectHowdidyouhearaboutus();
    })
    it('TC_17 Select an option for Are you a healthcare provider? ', () => {

        cy.wait(5000);
        const registration = new RegistrationPOM();

        registration.answerAreyouahealthcareprovider();
    })
    it('TC_18 Click on Register button', () => {

        cy.wait(5000);
        const registration = new RegistrationPOM();

        registration.clickonRegisterbutton();
        cy.url().should('eq', 'https://test.cascadetraining.com/courses/sso/registration-confirmation.cfm')
    })

    // THANK YOU PAGE
    it('TC_19 Verify Registration success message', () => {

        const thankyoup = new Thankyoupage();
        //thankyoup.checkRegistrationsuccessmessage().should('have-text', testdata.RegistrationSuccessMessage);
        cy.xpath("//p[normalize-space()='Thank you! for registering with cascade']").should('have.text', 'Thank you! for registering with cascade');
      })

      it('TC_20 Verify Thank You page content', () => {

        const thankyoup = new Thankyoupage();
        //thankyoup.checkThankyoupagecontent();
        cy.xpath("//p[contains(text(),'Click on the below link to explore the upcoming cl')]").should('have.text', 'Click on the below link to explore the upcoming classes');
        //cy.get(':nth-child(3) > .pnf-help').should('have-text', 'Thank you! for registering with cascade');
      })

      it('TC_21 Verify Find Class button functionality', () => {

        const thankyoup = new Thankyoupage();
        thankyoup.clickonFindclassbutton();
        cy.wait(3000);
        cy.url().should('eq', 'https://test.cascadetraining.com/courses/index.cfm')

        cy.xpath("//h1[normalize-space()='Find A Class']").should('have.text', 'Find A Class');
        //cy.xpath("//h1[normalize-space()='Find A Class']").should('have.test', 'Find A Class');
      })

      it('TC_22 Verify Home button functionality', () => {

        const thankyoup = new Thankyoupage();
        cy.wait(3000)

        // To Navigate back From Find Class Page to Thank You Page
       
        cy.go(-1);
        cy.url().should('eq', 'https://test.cascadetraining.com/courses/sso/registration-confirmation.cfm')
        cy.wait(5000);
        
        thankyoup.clickonHomebutton();
        cy.url().should('eq', 'https://test.cascadetraining.com/index.cfm');
      })
      it('TC_23 Verify user drop-down', () => {

        const thankyoup = new Thankyoupage();

        // To Navigate back From Home Page to Thank You Page

        cy.wait(3000)
        cy.go(-1);
        cy.url('eq', 'https://test.cascadetraining.com/courses/sso/registration-confirmation.cfm')
        cy.wait(3000);
        
        thankyoup.clickonUserdropdown();
      })
      it('TC_24 Verify logout functionality', () => {

        cy.wait(3000)

        const thankyoup = new Thankyoupage();
        thankyoup.clickonLogout();

        cy.url().should('eq', 'https://test.cascadetraining.com/');
      })
      // END of Thank You Page Test Cases
    //const loginpage = new login();
    
/*
    it('Log-in', () => {

        cy.get('#email').type('gsunil@trellissoft.ai');
        cy.get('#login-password').type('trellisdashboard@2@21');
        cy.wait(60000);
        cy.get('#btn-login1').click();
    })

    it('Create Report Module', () => {
        const report = new Reportpom();
        
        report.clickonReportbutton();
        cy.wait(3000);

        report.clickonCreatenew();
        cy.wait(3000);
        report.clickonYesbutton();

        report.clickonFilenametextbox("TestReport30509");
        cy.wait(10000);

        report.clickonSavebutton();
        cy.wait(10000);
    })

    it('Add DataBase Connection', () => {
        const report = new Reportpom();
        cy.wait(2000);

        report.clickonAddDatabutton();
        cy.wait(3000);

        report.selectDBConnection();
        report.clickonConnectbutton();
        cy.get('.alert').should('have.text', 'Successfully Connected');

        report.clickonOKbutton();
    })
    */
})