{/* <reference types="cypress" /> */}

describe("Registering user on the Konga application", function(){
it("Registers", function(){
    cy.visit("https://www.konga.com/");
    cy.get("._12e27_1r3kc > ._7ad32_SD12Y").click();
    cy.get("#username").type("preciousofarikoko@gmail.com");
    cy.get("#password").type("Maximum2a");
    cy.get(".eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG").click();
    
     

})

})