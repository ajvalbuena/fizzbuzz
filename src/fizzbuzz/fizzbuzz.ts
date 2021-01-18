import {
    BuzzStrategy,
    FizzBuzzStrategy,
    FizzStrategy,
    NumberStrategy
} from "./FizzBuzzGameStrategy";
import {getStrategyThatAppliesFor} from "./FizzBuzzResponsabilityChain";

const WRONG_ARGUMENTS = 'Wrong arguments'

export const generateFizzBuzz = (init: number, final: number): string => {
    let fizzBuzzList = ''

    if (init > final) return WRONG_ARGUMENTS

    for (let i = init; i <= final; i++) {
        fizzBuzzList = fizzBuzzList.concat(getNextNumber(i).concat('\n'))
    }

    return fizzBuzzList
}

const getNextNumber = (number: number) => {

    return getStrategyThatAppliesFor(number).toFizzBuzz(number)
}



