function countChange(change) {
  let total;
  let initialTotal = change.reduce((acc, current) => acc + current, 0);
  const base = Math.floor(initialTotal / 100);
  // let coinsFormatted = Number(initialTotal % 100).toFixed(2);
  let coins = initialTotal % 100;
  let coinsFormatted = coins.toString().padStart(2, '0');

  return `$${base}.${coinsFormatted}`;
}

console.log(countChange([25, 10, 5, 1]))