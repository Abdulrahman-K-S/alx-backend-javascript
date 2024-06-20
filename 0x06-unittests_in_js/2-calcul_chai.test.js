const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
    let expect;

    before(async () => {
        ({ expect } = await import('chai'));
    });

    describe('Type === SUM', () => {
        it('should return the numbers added correctly', () => {
            expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        });
    
        it('should return the numbers added after rounding up one of the inputed integers', () => {
            expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
        });
    
        it('should return the numbers added after rounding up both numbers', () => {
            expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
        });
    
        it('should return the numbers added after rounding up both numbers', () => {
            expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
        });
    
        it('should return the added numbres rounded down', () => {
            expect(calculateNumber('SUM', 0.1, 0.2)).to.equal(0);
        });
    });

    describe('Type === SUBTRACT', () => {
        it('should return the numbers subtracted correctly in positive', () => {
            expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
        });

        it('should return the numbers subtracted correctly in negative', () => {
            expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
        });
    
        it('should return the numbers subtracted after rounding up one of the inputed integers in positive', () => {
            expect(calculateNumber('SUBTRACT', 3.7, 1)).to.equal(3);
        });

        it('should return the numbers subtracted after rounding up one of the inputed integers in negative', () => {
            expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
        });
    
        it('should return the numbers subtracted after rounding up both numbers in positive', () => {
            expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
        });

        it('should return the numbers subtracted after rounding up both numbers in negative', () => {
            expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
        });
    
        it('should return the numbers subtracted after rounding up both numbers in positive', () => {
            expect(calculateNumber('SUBTRACT', 3.7, 1.5)).to.equal(2);
        });

        it('should return the numbers subtracted after rounding up both numbers in negative', () => {
            expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
        });
    
        it('should return the subtracted numbres rounded down', () => {
            expect(calculateNumber('SUBTRACT', 0.1, 0.2)).to.equal(0);
        });
    });

    describe('Type === DIVIDE', () => {
        it('should return the numbers divided after rounding up the 1st number', () => {
            expect(calculateNumber('DIVIDE', 7.8, 4)).to.equal(2);
        });

        it ('should return the numbers divided after rounding up the 2nd number', () => {
            expect(calculateNumber('DIVIDE', 4, 8.3)).to.equal(0.5);
        });

        it ('should return an Error after trying to divide by a 0', () => {
            expect(calculateNumber('DIVIDE', 3.9, 0)).to.equal('Error');
        });

        it('should return an Error after trying to divide on a rounded down 0', () => {
            expect(calculateNumber('DIVIDE', 2, 0.2)).to.be.a('string');
        });

        it('should return the numbres divided after rounding', () => {
            expect(calculateNumber('DIVIDE', 0.3, 6.5)).to.equal(0);
        });
    });
})
