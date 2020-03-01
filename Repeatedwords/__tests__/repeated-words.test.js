/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';

const repeat = require('../src/repeated-words.js');
describe('repeat function', () => {
  it('returns first word that repeats in a string', () => {
    const testStr = 'Once upon a time, there was a brave princess who...';
    expect(repeat(testStr)).toEqual('a');
    console.log('the first repeated word is : ', repeat(testStr));
  });
});