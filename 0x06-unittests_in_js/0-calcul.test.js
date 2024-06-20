const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function () {
    it('should return the numbers added correctly', () => {
        assert.deepStrictEqual(calculateNumber(1, 3), 4);
    });

    it('should return the numbers added after rounding up one of the inputed integers', () => {
        assert.deepStrictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should return the numbers added after rounding up both numbers', () => {
        assert.deepStrictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should return the numbers added after rounding up both numbers', () => {
        assert.deepStrictEqual(calculateNumber(1.5, 3.7), 6);
    });
})
