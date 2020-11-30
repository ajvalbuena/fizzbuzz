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

    const fizzBuzz = [new NumberStrategy(), new FizzBuzzStrategy(), new FizzStrategy(), new BuzzStrategy()]
    for (let index = 0; index <= fizzBuzz.length; index++) {
        if(fizzBuzz[index].appliesStrategy(i)){
            return fizzBuzz[index].toFizzBuzz(i)
        }
    }
    return ''

}


