export function checarHabitaciones(Premium, Economy, clients) {
  let aboveHundred = clients.filter((n) => n >= 100).sort((a, b) => b - a);
  let belowHundred = clients.filter((n) => n < 100).sort((a, b) => b - a);

  let premiumProfits = 0;
  //loop where we take the first premium number of clients and what each one pay for his/her room and then we sums all this numbers to obtain the total earning for our Premium room's.
  if (Premium <= aboveHundred.length) {
    for (let i = 0; i < Premium; i++) {
      premiumProfits += aboveHundred[i];
    }
  }

  //If all of ours economy rooms are full, then send that clients to a Premium Room.
  if (Premium > aboveHundred.length) {
    const hostUpgrade = Math.abs(aboveHundred.length - Premium);

    for (let i = 0; i < hostUpgrade; i++) {
      aboveHundred.push(belowHundred[i]);
    }

    belowHundred = belowHundred.slice(hostUpgrade);

    for (let i = 0; i < Premium; i++) {
      premiumProfits += aboveHundred[i];
    }
  }

  let economyProfits = 0;
  //loop where we take the first economy number of clients and what each one pay for his/her room and then we sums all this numbers to obtain the total earning for our economy room's.
  if (Economy <= belowHundred.length) {
    for (let i = 0; i < Economy; i++) {
      economyProfits += belowHundred[i];
    }
  }

  let totalEarnings = [premiumProfits, economyProfits];
  return totalEarnings;
}

//   let Premium;
//   let Economy;

//   describe("Prueba 1", () => {
//     test("Habitaciones gratuitas Premium: 3 Habitaciones gratuitas Economy: 3",() => {
//       Premium = 3;
//       Economy = 3;
//       expect(checarHabitaciones(Premium, Economy)).toStrictEqual([738, 167]);
//     });
//   });

//   describe("Prueba 2", () => {
//     test("Habitaciones Premium gratuitas: 6 Habitaciones Economy gratuitas: 4",() => {
//       Premium = 6;
//       Economy = 4;
//       expect(checarHabitaciones(Premium, Economy)).toStrictEqual([1054, 189]);
//     });
//   });

//   describe("Prueba 3", () => {
//     test("Habitaciones Premium gratuitas: 2 Habitaciones Economy gratuitas: 4",() => {
//       Premium = 2;
//       Economy = 4;
//       expect(checarHabitaciones(Premium, Economy)).toStrictEqual([583, 189]);
//     });
//   });

//   describe("Prueba 4", () => {
//     test("Habitaciones Premium gratuitas: 7 Habitaciones Economy gratuitas: 1",() => {
//       Premium = 7;
//       Economy = 1;
//       expect(checarHabitaciones(Premium, Economy)).toStrictEqual([1153, 45]);
//     });
//   });
