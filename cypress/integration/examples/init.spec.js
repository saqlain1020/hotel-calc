describe('Cypress', () => {
    it('is working', () => {
      expect(true).to.equal(true)
    })
  })

import { checarHabitaciones } from './../../../src/Functions/Functions';

let Premium;
let Economy;
const clients = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];

describe("Test 1", () => {
  it("Free Premium rooms: 3 Free Economy rooms: 3", () => {
    Premium = 3;
    Economy = 3;
    
    expect(checarHabitaciones(Premium, Economy, clients)[0]).to.eq(738);
    expect(checarHabitaciones(Premium, Economy, clients)[1]).to.eq(167);
  });
});

describe("Test 2", () => {
  it("Free Premium rooms: 6 Free Economy rooms: 4", () => {
    Premium = 6;
    Economy = 4;
    expect(checarHabitaciones(Premium, Economy, clients)[0]).to.eq(1054);
    expect(checarHabitaciones(Premium, Economy, clients)[1]).to.eq(189);    
  });
});

describe("Test 3", () => {
  it("Free Premium rooms: 2 Free Economy rooms: 4", () => {
    Premium = 2;
    Economy = 4;
    expect(checarHabitaciones(Premium, Economy, clients)[0]).to.eq(583);
    expect(checarHabitaciones(Premium, Economy, clients)[1]).to.eq(189);
  });
});

describe("Test 4", () => {
  it("Free Premium rooms: 7 Free Economy rooms: 1", () => {
    Premium = 7;
    Economy = 1;
    expect(checarHabitaciones(Premium, Economy, clients)[0]).to.eq(1153);
    expect(checarHabitaciones(Premium, Economy, clients)[1]).to.eq(45);
  });
});