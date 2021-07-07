'use strict';

const bracketValidation = require('../src/multibracketvalidation.js');

describe('Multi bracket validator testing', () => {

    it('it should return true when presented with balanced brackets', () => {
        expect(bracketValidation('{}')).toBeTruthy();
        expect(bracketValidation('[({})]')).toBeTruthy();
        expect(bracketValidation('(){}[{}]')).toBeTruthy();
    });

    it('it should return true when match is found with extra characters', () => {
        expect(bracketValidation('{}{Code}[Fellows](())	')).toBeTruthy();
    });

    it('it should return false when presented with unbalanced brackets', () => {
        expect(bracketValidation('[({}]')).toBeFalsy();
        expect(bracketValidation('(](')).toBeFalsy();

    });

    it('it should return undefined when given a value that is not a string', () => {
        expect(bracketValidation(3)).toBeUndefined();

    });
});