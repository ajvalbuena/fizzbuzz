export const generateFizzBuzz = (init: number, final: number): string => {
    let fizzBuzzList = ''

        for (let i = init; i <= final; i++) {
            let nextNumber = i.toString()
            if(i==3 || i%3 == 0 || nextNumber.includes('3')){nextNumber='Fizz'}
            if(i==5 || i%5 == 0 || nextNumber.includes('5')){nextNumber='Buzz'}
            fizzBuzzList = fizzBuzzList.concat(nextNumber.concat('\n'))
        }

    return fizzBuzzList
}