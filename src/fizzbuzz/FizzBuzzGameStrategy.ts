export interface FizzBuzzGameStrategy {

    toFizzBuzz: (i: number) => string
}

export class FizzStrategy implements FizzBuzzGameStrategy {

    toFizzBuzz = (i: number): string => {
        return 'Fizz'
    }
}

export class BuzzStrategy implements FizzBuzzGameStrategy {

    toFizzBuzz = (i: number): string => {
        return 'Buzz'
    }
}

export class FizzBuzzStrategy implements FizzBuzzStrategy {

    toFizzBuzz = (i: number): string => {
        return 'FizzBuzz'
    }
}

export class NumberStrategy implements FizzBuzzStrategy {

    toFizzBuzz = (i: number): string => {
        return i.toString()
    }
}