import {generateFizzBuzz} from "./fizzbuzz";
const fiizBuzz1to60 = "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\nFizz\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz" +
    "\nFizz\n22\nFizz\nFizz\nBuzz\n26\nFizz\n28\n29\nFizzBuzz\nFizz\nFizz\nFizz\nFizz\nFizzBuzz\nFizz\nFizz\nFizz\nFizz\nBuzz" +
    "\n41\nFizz\nFizz\n44\nFizzBuzz\n46\n47\nFizz\n49\nBuzz\nFizzBuzz\nBuzz\nFizzBuzz\nFizzBuzz\nBuzz\nBuzz\nFizzBuzz\nBuzz\nBuzz\nFizzBuzz\n"

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

    it('FizzBuzz from 1 to 14', () => {
        expect(generateFizzBuzz(1,14)).toBe('1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\nFizz\n14\n')
    });

    it('FizzBuzz from 1 to 15', () => {
        expect(generateFizzBuzz(1,15)).toBe('1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\nFizz\n14\nFizzBuzz\n')
    });

    it('FizzBuzz from 1 to 60', () => {
        expect(generateFizzBuzz(1,60)).toBe(fiizBuzz1to60)
    });

    it('FizzBuzz from 35 to 45', () => {
        expect(generateFizzBuzz(35,45)).toBe("FizzBuzz\nFizz\nFizz\nFizz\nFizz\nBuzz" +
            "\n41\nFizz\nFizz\n44\nFizzBuzz\n")
    });


})