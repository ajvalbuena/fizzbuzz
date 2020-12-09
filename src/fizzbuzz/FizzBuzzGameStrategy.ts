export abstract class FizzBuzzGameStrategy {
    protected nextStrategy:FizzBuzzGameStrategy;


    public setNext = ((strategy: FizzBuzzGameStrategy) => {
        this.nextStrategy = strategy;
        return this

    })
    public getFizzBuzzElement = (i: number): string => this.appliesStrategy(i) ? this.toFizzBuzz(i) : this.nextStrategy.getFizzBuzzElement(i)

    protected isFizzOrBuzz = (i: number, conditional: number) : boolean  => i % conditional == 0 || i.toString().includes(conditional.toString())


    toFizzBuzz: ((i: number) => string) | undefined
    appliesStrategy: (i: number) => boolean


}

export class FizzStrategy extends FizzBuzzGameStrategy {
    toFizzBuzz = (i: number): string => 'Fizz'
    appliesStrategy = (i: number): boolean => this.isFizzOrBuzz(i, 3)
}

export class BuzzStrategy extends FizzBuzzGameStrategy {
    toFizzBuzz = (i: number): string => 'Buzz'
    appliesStrategy = (i: number): boolean => this.isFizzOrBuzz(i, 5)
}

export class FizzBuzzStrategy extends FizzBuzzGameStrategy {
    toFizzBuzz = (i: number): string => 'FizzBuzz'
    appliesStrategy = (i: number): boolean => (this.isFizzOrBuzz(i, 3) && this.isFizzOrBuzz(i, 5))
}

export class NumberStrategy extends FizzBuzzGameStrategy {
    toFizzBuzz = (i: number): string => i.toString()
    appliesStrategy = (i: number): boolean=> i==0 ? true :  (!this.isFizzOrBuzz(i, 3) && !this.isFizzOrBuzz(i, 5))
}