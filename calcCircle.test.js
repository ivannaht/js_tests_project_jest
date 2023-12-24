// task 13.3

const {getCircleLength, getCircleArea} = require("./calcCircle");


describe('getCircleLength', () => {  
    test('verify that the length of a circle  with radius 22 equals 138.2', () => {
        expect(getCircleLength(22)).toBeCloseTo(138.2, 1)
    });

    test('verify getCircleLength with invalid arqument', () => {
        expect(() => getCircleLength("fdsfsf")).toThrow('the function require 1 numeric argument');
    });

    test('verify getCircleLength with no arqument', () => {
        expect(() => getCircleLength()).toThrow('the function require 1 numeric argument');
    });
});

describe('getCircleArea', () => {  
    test('verify that the approximate area of the circle with radius 9 equals 254.47', () => {
        expect(getCircleArea(9)).toBeCloseTo(254.47, 2)
    });

    test('verify getCircleArea with invalid arqument', () => {
        expect(() => getCircleArea("fdsfsf")).toThrow('the function require 1 numeric argument');
    });

    test('verify getCircleArea with no arqument', () => {
        expect(() => getCircleArea()).toThrow('the function require 1 numeric argument');
    });
});
