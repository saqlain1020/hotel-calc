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
