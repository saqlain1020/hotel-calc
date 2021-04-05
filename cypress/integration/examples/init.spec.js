describe('Cypress', () => {
    it('is working', () => {
      expect(true).to.equal(true)
    })
  })

const clients = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];

describe("Test 1", () => {
  it("Free Premium rooms: 3 Free Economy rooms: 3", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".premium").type("3");
    cy.get(".economy").type("3");
    cy.get(".outline-btn").click();
    cy.get(".premiumRes").contains("738")
    cy.get(".economyRes").contains("167")
  });
});

describe("Test 2", () => {
  it("Free Premium rooms: 6 Free Economy rooms: 4", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".premium").type("6");
    cy.get(".economy").type("4");
    cy.get(".outline-btn").click();
    cy.get(".premiumRes").contains("1054")
    cy.get(".economyRes").contains("189")  
  });
});

describe("Test 3", () => {
  it("Free Premium rooms: 2 Free Economy rooms: 4", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".premium").type("2");
    cy.get(".economy").type("4");
    cy.get(".outline-btn").click();
    cy.get(".premiumRes").contains("583")
    cy.get(".economyRes").contains("189")  
  });
});

describe("Test 4", () => {
  it("Free Premium rooms: 7 Free Economy rooms: 1", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".premium").type("7");
    cy.get(".economy").type("1");
    cy.get(".outline-btn").click();
    cy.get(".premiumRes").contains("1153")
    cy.get(".economyRes").contains("45")  
  });
});
