const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', function () {
    describe('Type === SUM', () => {
        it('should return the numbers added correctly', () => {
            assert.deepStrictEqual(calculateNumber('SUM', 1, 3), 4);
        });
    
        it('should return the numbers added after rounding up one of the inputed integers', () => {
            assert.deepStrictEqual(calculateNumber('SUM', 1, 3.7), 5);
        });
    
        it('should return the numbers added after rounding up both numbers', () => {
            assert.deepStrictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        });
    
        it('should return the numbers added after rounding up both numbers', () => {
            assert.deepStrictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
        });
    
        it('should return the added numbres rounded down', () => {
            assert.deepStrictEqual(calculateNumber('SUM', 0.1, 0.2), 0);
        });
    });

    describe('Type === SUBTRACT', () => {
        it('should return the numbers subtracted correctly in positive', () => {
            assert.deepStrictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
        });

        it('should return the numbers subtracted correctly in negative', () => {
            assert.deepStrictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
        });
    
        it('should return the numbers subtracted after rounding up one of the inputed integers in positive', () => {
            assert.deepStrictEqual(calculateNumber('SUBTRACT', 3.7, 1), 3);
        });

        it('should return the numbers subtracted after rounding up one of the inputed integers in negative', () => {
            assert.deepStrictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
        });
    
        it('should return the numbers subtracted after rounding up both numbers in positive', () => {
            assert.deepStrictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
        });

        it('should return the numbers subtracted after rounding up both numbers in negative', () => {
            assert.deepStrictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
        });
    
        it('should return the numbers subtracted after rounding up both numbers in positive', () => {
            assert.deepStrictEqual(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
        });

        it('should return the numbers subtracted after rounding up both numbers in negative', () => {
            assert.deepStrictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
        });
    
        it('should return the subtracted numbres rounded down', () => {
            assert.deepStrictEqual(calculateNumber('SUBTRACT', 0.1, 0.2), 0);
        });
    });

    describe('Type === DIVIDE', () => {
        it('should return the numbers divided after rounding up the 1st number', () => {
            assert.deepStrictEqual(calculateNumber('DIVIDE', 7.8, 4), 2);
        });

        it ('should return the numbers divided after rounding up the 2nd number', () => {
            assert.deepStrictEqual(calculateNumber('DIVIDE', 4, 8.3), 0.5);
        });

        it ('should return an Error after trying to divide by a 0', () => {
            assert.deepStrictEqual(calculateNumber('DIVIDE', 3.9, 0), 'Error');
        });

        it('should return an Error after trying to divide on a rounded down 0', () => {
            assert.deepStrictEqual(calculateNumber('DIVIDE', 2, 0.2), 'Error');
        });

        it('should return the numbres divided after rounding', () => {
            assert.deepStrictEqual(calculateNumber('DIVIDE', 0.3, 6.5), 0);
        });
    });
})
