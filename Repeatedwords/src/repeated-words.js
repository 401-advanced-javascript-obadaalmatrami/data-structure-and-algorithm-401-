'use strict';

const repeat = (str) => {
  const multisymbols = str.replace(/[^\w\s]/, ' ');
  const arr1 = multisymbols.toLowerCase().split(' ');
  let wordCount = {};
  let answer;
  for(let i = 0; i < arr1.length; i++) {
    if(!wordCount[arr1[i]]) {
      wordCount[arr1[i]] = 1;
    }
    else {
      answer = arr1[i];
    }
  }
  return answer;


};
module.exports = repeat;