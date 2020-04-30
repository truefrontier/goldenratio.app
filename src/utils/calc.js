const gr = 1.61803398875; // The Golden Ratio
const grBase = 100000;

const grArr = [
  0,
  grBase / gr / gr / gr / gr / gr,
  grBase / gr / gr / gr / gr,
  grBase / gr / gr / gr,
  grBase / gr / gr,
  grBase / gr,
  grBase,
  grBase * gr,
  grBase * gr * gr,
  grBase * gr * gr * gr,
  grBase * gr * gr * gr * gr,
  grBase * gr * gr * gr * gr * gr,
];

const maxFit = (target, max) => {
  if (Math.round(grArr[max]) <= Math.round(target)) {
    return max;
  }
  max--;
  return max ? maxFit(target, max) : false;
};

export const findGoldenMatches = (arr1, arr2 = [], arrMax = 5) => {
  let result = [];

  if (!arr1.length && !arr2.length) return result;

  const arr1Total = arr1.reduce((sum, cur) => {
    sum += grArr[cur];
    return sum;
  }, 0);

  const arr2Total = arr2.reduce((sum, cur) => {
    sum += grArr[cur];
    return sum;
  }, 0);

  const arrTotal = Math.abs(arr1Total - arr2Total);

  let foundArr = [];
  let foundTotal = 0;

  // max is the number of the highest
  // which is also the index of the next lowest
  const find = (target, max = 12) => {
    let fit = maxFit(target, max);
    if (fit) {
      // store in foundArr and keep going
      foundArr.push(fit);
      foundTotal += grArr[fit];
      find(arrTotal - foundTotal, fit);
    } else {
      // store foundArr accordingly
      if (foundTotal && Math.round(foundTotal) === Math.round(arrTotal)) {
        result.push(foundArr);
      }

      let [nextMax] = foundArr;
      if (nextMax >= 1) {
        foundArr = [];
        foundTotal = 0;
        find(arrTotal, nextMax - 1);
      }
    }
  };

  find(arrTotal);

  return result;
};
