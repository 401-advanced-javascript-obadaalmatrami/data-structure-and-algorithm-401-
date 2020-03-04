/* eslint-disable no-unreachable */


const leftJoin = (tableOne, tableTwo) => {
  let results = [];
  for (let i = 0; i < tableOne.bucket.length; i++) {
    if (tableOne.bucket[i] !== null) {
      results.push(tableOne.bucket[i]);
    }
  }
  for (let i = 0; i < tableTwo.bucket.length; i++) {
    if (tableTwo.bucket[i] !== null) {
      results.forEach(kv => {
        if (tableTwo.bucket[i][0] === kv[0]) {
          kv.push(tableTwo.bucket[i][1]);
        }
      });
    }
  }
  results.forEach(result => {
    if (result.length === 2) {
      result.push(null);
    }
  });
  return results;
};
module.exports = leftJoin;