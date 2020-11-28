import {generateFizzBuzz} from "./fizzbuzz";

describe('Fizz Buzz', () => {

    it('FizzBuzz from 1 to 1 ', () => {
        expect(generateFizzBuzz(1,1)).toBe('1\n')
    });

    it('FizzBuzz from 1 to 2 ', () => {
        expect(generateFizzBuzz(1,2)).toBe('1\n2\n')
    });

    it('FizzBuzz from 1 to 3 ', () => {
        expect(generateFizzBuzz(1,3)).toBe('1\n2\nFizz\n')
    });

    it('FizzBuzz from 1 to 4', () => {
        expect(generateFizzBuzz(1,4)).toBe('1\n2\nFizz\n4\n')
    });

    it('FizzBuzz from 1 to 5', () => {
        expect(generateFizzBuzz(1,5)).toBe('1\n2\nFizz\n4\nBuzz\n')
    });

    it('FizzBuzz from 1 to 6', () => {
        expect(generateFizzBuzz(1,6)).toBe('1\n2\nFizz\n4\nBuzz\nFizz\n')
    });


})