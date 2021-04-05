// import { render, screen } from "@testing-library/react";
// import App from "./App";
import { checarHabitaciones } from "./Functions/Functions";

let Premium;
let Economy;
const clients = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];

describe("Test 1", () => {
  test("Free Premium rooms: 3 Free Economy rooms: 3", () => {
    Premium = 3;
    Economy = 3;
    expect(checarHabitaciones(Premium, Economy, clients)).toStrictEqual([
      738,
      167,
    ]);
  });
});

describe("Test 2", () => {
  test("Free Premium rooms: 6 Free Economy rooms: 4", () => {
    Premium = 6;
    Economy = 4;
    expect(checarHabitaciones(Premium, Economy, clients)).toStrictEqual([
      1054,
      189,
    ]);
  });
});

describe("Test 3", () => {
  test("Free Premium rooms: 2 Free Economy rooms: 4", () => {
    Premium = 2;
    Economy = 4;
    expect(checarHabitaciones(Premium, Economy, clients)).toStrictEqual([
      583,
      189,
    ]);
  });
});

describe("Test 4", () => {
  test("Free Premium rooms: 7 Free Economy rooms: 1", () => {
    Premium = 7;
    Economy = 1;
    expect(checarHabitaciones(Premium, Economy, clients)).toStrictEqual([
      1153,
      45,
    ]);
  });
});

// test('renders learn react link', () => {
//   render(<App />);
//   screen.getByText('')
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
