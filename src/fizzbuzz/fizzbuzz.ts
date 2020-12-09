import {
    BuzzStrategy,
    FizzBuzzStrategy,
    FizzStrategy,
    NumberStrategy
} from "./FizzBuzzGameStrategy";

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

    const  fizzStrategy = new FizzStrategy()
    const  buzzStrategy = new BuzzStrategy().setNext(fizzStrategy)
    const  fizzBuzzStrategy = new FizzBuzzStrategy().setNext( buzzStrategy)
    const  numberStrategy = new NumberStrategy().setNext(fizzBuzzStrategy)

    return numberStrategy.getFizzBuzzElement(i)
}



