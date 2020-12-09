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
    let nextNumber = ''
    const fizzBuzzStrategies = [ new FizzStrategy(), new BuzzStrategy(), new FizzBuzzStrategy(), new NumberStrategy()]

    fizzBuzzStrategies.forEach((strategy) => {
        if (strategy.appliesStrategy(i)) {
            nextNumber = strategy.toFizzBuzz(i)
        }
    })
    return nextNumber

}


