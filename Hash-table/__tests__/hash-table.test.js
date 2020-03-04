/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';

const Hashtable = require('../src/hash-table.js');

describe('Hash table ', () => {
  it('hashes a key', () => {
    const testTable = new Hashtable();
    expect(testTable.hash('obadabmw')).toBe(8);
    console.log('the key',testTable.hash('obadabmw'));
  });

  it('adds a key value ', () => {
    const testTable = new Hashtable();
    testTable.add('obadabmw', 'test');
    expect(testTable.get('obadabmw')).toEqual(['test']);
    console.log('add',testTable);
  });

  it('adds value when the key already exists', () => {
    const testTable = new Hashtable();
    testTable.add('obadabmw', 'test1');
    testTable.add('obadabmw', 'test2');
    expect(testTable.get('obadabmw')).toEqual(['test1', 'test2']);
    console.log('get',testTable);
  });

  it('returns null in no key does not exists', () => {
    const testTable = new Hashtable();
    expect(testTable.get('obadabmw')).toEqual(null);
  });

  it('checks if a hash table contains a key', () => {
    const testTable = new Hashtable();
    testTable.add('obadabmw', 'test');
    expect(testTable.contains('obadabmw')).toBe(true);
    expect(testTable.contains('fail')).toBe(null);
    console.log('the key',testTable.contains('obadabmw'));
  });
});