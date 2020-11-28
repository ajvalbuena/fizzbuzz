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
    if (i == 3 || i % 3 == 0 || nextNumber.includes('3')) {
        nextNumber = 'Fizz'
    }
    if (i == 5 || i % 5 == 0 || nextNumber.includes('5')) {
        nextNumber = 'Buzz'
    }
    if (i % 3 == 0 && i % 5 == 0) {
        nextNumber = 'FizzBuzz'
    }
    return nextNumber;
}

