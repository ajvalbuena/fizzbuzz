export const generateFizzBuzz = (init: number, final: number): string => {
    let fizzBuzzList = ''

        for (let i = init; i <= final; i++) {
            let nextNumber = getNextNumber(i);
            fizzBuzzList = fizzBuzzList.concat(nextNumber.concat('\n'))
        }

    return fizzBuzzList
}

const getNextNumber = (i: number) => {
    let nextNumber = i.toString()
    if (isFizz(i)) {
        nextNumber = 'Fizz'
    }
    if (isBuzz(i)) {
        nextNumber = 'Buzz'
    }
    if (isFizz(i) && isBuzz(i) ) {
        nextNumber = 'FizzBuzz'
    }
    return nextNumber;
}

const isFizz = (i: number) => {
    return i % 3 == 0 || i.toString().includes('3')
}

const isBuzz = (i: number) => {
    return i % 5 == 0 || i.toString().includes('5')
}

