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
    if (i == 0) {
        return new NumberStrategy().toFizzBuzz(i)
    }
    if (isFizzOrBuzz(i, 3)) {
        return new FizzStrategy().toFizzBuzz(i)
    }
    if (isFizzOrBuzz(i, 5)) {
        return new BuzzStrategy().toFizzBuzz(i)
    }
    if (isFizzOrBuzz(i, 3) && isFizzOrBuzz(i, 5)) {
        return new FizzBuzzStrategy().toFizzBuzz(i)
    }
    return new NumberStrategy().toFizzBuzz(i)
}

const isFizzOrBuzz = (i: number, conditional: number) => {
    return i % conditional == 0 || i.toString().includes(conditional.toString())
}

