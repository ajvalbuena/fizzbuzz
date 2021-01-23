import {
    BuzzStrategy,
    FizzBuzzGameStrategy,
    FizzBuzzStrategy,
    FizzStrategy,
    NumberStrategy
} from "./FizzBuzzGameStrategy";

export const getStrategyThatAppliesFor = (number: number):FizzBuzzGameStrategy   => {
    const fizzBuzzStrategies = new Array<FizzBuzzGameStrategy>(new NumberStrategy(number), new FizzBuzzStrategy(number), new BuzzStrategy(number), new FizzStrategy(number))
    return fizzBuzzStrategies.find((strategy: FizzBuzzGameStrategy) => strategy.appliesStrategy()) || new NumberStrategy(number)
}

