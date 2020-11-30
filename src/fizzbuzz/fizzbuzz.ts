import {BuzzStrategy, FizzBuzzStrategy, FizzStrategy, NumberStrategy} from "./FizzBuzzGameStrategy";

const WRONG_ARGUMENTS = 'Wrong arguments'

export const generateFizzBuzz = (init: number, final: number): string => {
    let fizzBuzzList = ''

    if (init > final) return WRONG_ARGUMENTS

    for (let i = init; i <= final; i++) {
        fizzBuzzList = fizzBuzzList.concat(getNextNumber(i).concat('\n'))
    }

    return fizzBuzzList
}

const getNextNumber = (i: number) => {


    if (new NumberStrategy().appliesStrategy(i)) {
        return new NumberStrategy().toFizzBuzz(i)
    }
    if (new FizzBuzzStrategy().appliesStrategy(i)) {
        return new FizzBuzzStrategy().toFizzBuzz(i)
    }

    if (new FizzStrategy().appliesStrategy(i)) {
        return new FizzStrategy().toFizzBuzz(i)
    }
    if (new BuzzStrategy().appliesStrategy(i)) {
        return new BuzzStrategy().toFizzBuzz(i)
    }

    return new NumberStrategy().toFizzBuzz(i)
}

const isFizzOrBuzz = (i: number, conditional: number) => {
    return i % conditional == 0 || i.toString().includes(conditional.toString())
}

