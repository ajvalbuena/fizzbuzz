export abstract class FizzBuzzGameStrategy {
    number: number;

    constructor(number: number) {
        this.number = number;
    }

    protected isFizzOrBuzz = (conditional: number) : boolean  => this.number % conditional == 0 || this.number.toString().includes(conditional.toString())

    abstract toFizzBuzz (): string
    abstract appliesStrategy(): boolean
}

export class FizzStrategy extends FizzBuzzGameStrategy {
    toFizzBuzz = (): string => 'Fizz'
    appliesStrategy = (): boolean => this.isFizzOrBuzz(3)
}

export class BuzzStrategy extends FizzBuzzGameStrategy {
    toFizzBuzz = (): string => 'Buzz'
    appliesStrategy = (): boolean => this.isFizzOrBuzz(5)
}

export class FizzBuzzStrategy extends FizzBuzzGameStrategy {
    toFizzBuzz = (): string => 'FizzBuzz'
    appliesStrategy = (): boolean => (this.isFizzOrBuzz(3) && this.isFizzOrBuzz(5))
}

export class NumberStrategy extends FizzBuzzGameStrategy {
    toFizzBuzz = (): string => this.number.toString()
    appliesStrategy = (): boolean=> this.number==0 ? true :  (!this.isFizzOrBuzz(3) && !this.isFizzOrBuzz(5))
}