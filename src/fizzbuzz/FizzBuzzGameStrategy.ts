export abstract class FizzBuzzGameStrategy {

    toFizzBuzz: ((i: number) => string) | undefined
    appliesStrategy: (i: number) => boolean

    protected isFizzOrBuzz = (i: number, conditional: number) => {
        return i % conditional == 0 || i.toString().includes(conditional.toString())
    }
}

export class FizzStrategy extends FizzBuzzGameStrategy {

    toFizzBuzz = (i: number): string => {
        return 'Fizz'
    }

    appliesStrategy = (i: number): boolean => {
        return this.isFizzOrBuzz(i, 3)
    }

}

export class BuzzStrategy extends FizzBuzzGameStrategy {

    toFizzBuzz = (i: number): string => {
        return 'Buzz'
    }

    appliesStrategy = (i: number): boolean => {
        return this.isFizzOrBuzz(i, 5)
    }
}

export class FizzBuzzStrategy extends FizzBuzzGameStrategy {

    toFizzBuzz = (i: number): string => {
        return 'FizzBuzz'
    }

    appliesStrategy = (i: number): boolean => {
        return this.isFizzOrBuzz(i, 3) && this.isFizzOrBuzz(i, 5)
    }
}

export class NumberStrategy extends FizzBuzzGameStrategy {

    toFizzBuzz = (i: number): string => {
        return i.toString()
    }

    appliesStrategy = (i: number): boolean => {
        if (i == 0) return true
        return !this.isFizzOrBuzz(i, 3) && !this.isFizzOrBuzz(i, 5)
    }
}