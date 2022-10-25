const WaterCalculator = require('../index');
const ERROR_MSG = require('../constants')

describe('WaterCalculator', () => {
    const waterCalculator = WaterCalculator;

    describe('when provided "landscape" argument is valid', () => {
        const testModel = [1,0,0,0,3,1,1,2,5,4];
        const actualResult = waterCalculator.calculateWaterAmount(testModel);
        const expectedResult = 8

        it('should return number', () => {
            expect(typeof actualResult).toBe('number');
        });

        it('should return exact "8" number', () => {
            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('when provided "landscape" argument is empty', () => {
        const testModel = [];
        const actualResult = waterCalculator.calculateWaterAmount(testModel);

        it('should return string', () => {
            expect(typeof actualResult).toBe('string');
        });

        it(`should return message: ${ERROR_MSG}`, () => {
            expect(actualResult).toEqual(ERROR_MSG);
        });
    });

    describe('when provided "landscape" argument has length more then 32000 elements', () => {
        const testModel = new Array(32001).fill(Math.random());
        const actualResult = waterCalculator.calculateWaterAmount(testModel);

        it('should return string', () => {
            expect(typeof actualResult).toBe('string');
        });

        it(`should return message: ${ERROR_MSG}`, () => {
            expect(actualResult).toEqual(ERROR_MSG);
        });
    });

    describe('when provided "landscape" argument contains element higher than 32000', () => {
        const testModel = [0, 0, 1, 32001, 1, 1, 1];
        const actualResult = waterCalculator.calculateWaterAmount(testModel);

        it('should return string', () => {
            expect(typeof actualResult).toBe('string');
        });

        it(`should return message: ${ERROR_MSG}`, () => {
            expect(actualResult).toEqual(ERROR_MSG);
        });
    });

    describe('when provided "landscape" argument is not array', () => {
        const testModel = null;
        const actualResult = waterCalculator.calculateWaterAmount(testModel);

        it('should return string', () => {
            expect(typeof actualResult).toBe('string');
        });

        it(`should return message: ${ERROR_MSG}`, () => {
            expect(actualResult).toEqual(ERROR_MSG);
        });
    });

    describe('when provided "landscape" argument contains element which is not number', () => {
        const testModel = [1, 2, 3, 'some'];
        const actualResult = waterCalculator.calculateWaterAmount(testModel);

        it('should return string', () => {
            expect(typeof actualResult).toBe('string');
        });

        it(`should return message: ${ERROR_MSG}`, () => {
            expect(actualResult).toEqual(ERROR_MSG);
        });
    });
});
