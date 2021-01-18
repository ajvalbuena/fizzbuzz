import {
    BuzzStrategy,
    FizzBuzzGameStrategy,
    FizzBuzzStrategy,
    FizzStrategy,
    NumberStrategy
} from "./FizzBuzzGameStrategy";


const fizzBuzzstrategies = new Array<FizzBuzzGameStrategy>(new NumberStrategy(), new FizzBuzzStrategy(), new BuzzStrategy(), new FizzStrategy())


export const getStrategyThatAppliesFor = (number: number):FizzBuzzGameStrategy   => {

    return fizzBuzzstrategies.find((strategy: FizzBuzzGameStrategy) => strategy.appliesStrategy(number)) || new NumberStrategy()
}

