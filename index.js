let investing = process.argv[2];

const totalEarnedFromBottles = (bottles, caps, callback) => {
  if (bottles[0] < 2 && caps[0] < 4) {
    callback(undefined, undefined, bottles[0], caps[0]);
    return 0;
  }

  let remainingBottles = bottles[0] % 2;
  let newBottles = Math.floor(Math.floor(bottles[0] / 2) + (caps[0] / 4));
  let totalCaps = (caps[0] % 4) + newBottles;

  let earnedFromBottles = Math.floor(bottles[0] / 2) + bottles[1];
  let earnedFromCaps = Math.floor(caps[0] / 4) + caps[1];

  callback(earnedFromBottles, earnedFromCaps);

  return newBottles
    + totalEarnedFromBottles([(newBottles + remainingBottles),earnedFromBottles],
      [(totalCaps),earnedFromCaps],
      callback);
};

const poppinBottles = (invested) => {
  let bottlesInitial = invested / 2;

  let tracker = closureBottles(0,0);

  let bottlesEarnedTotal = totalEarnedFromBottles([bottlesInitial,0],[bottlesInitial,0], tracker);

  let tempArraysOfBottleInfo = tracker().map(arr => arr.filter(e => e !== undefined).reverse()[0]);
  let [ earnedFromBottles, earnedFromCaps, remainingBottles, remainingCaps ] = tempArraysOfBottleInfo;

  let bottlesTotal = bottlesEarnedTotal + bottlesInitial;

  console.log(`
    Total Bottles:      ${bottlesTotal}
    Remaining Bottles:  ${remainingBottles}
    Remaining Caps:     ${remainingCaps}
    Total Earned:
      Bottles:          ${earnedFromBottles}
      Caps:             ${earnedFromCaps}
  `);

  return bottlesTotal;
};

const closureBottles = () => {
  let earnedFromBottles = [];
  let earnedFromCaps = [];
  let remainingBottles = [];
  let remainingCaps = [];

  return (frBottles, frCaps, remainingBotts, remainingCps) => {
    earnedFromBottles.push(frBottles);
    earnedFromCaps.push(frCaps);
    remainingBottles.push(remainingBotts);
    remainingCaps.push(remainingCps);
    return [earnedFromBottles, earnedFromCaps, remainingBottles, remainingCaps];
  };
};

poppinBottles(investing);

module.exports = poppinBottles;