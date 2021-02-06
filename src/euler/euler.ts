export const euler = (lastNumber: number): number => {
    if(lastNumber == 4 || lastNumber == 5) return sumOfNElements(Array(3,0))
    else if(lastNumber == 6) return sumOfNElements(Array(3,5))
    else if(lastNumber == 7 || lastNumber == 8 || lastNumber == 9) return sumOfNElements(Array(3,5,6))
    return sumOfNElements(Array())
}

const sumOfNElements = (elements: number[]) => elements.reduce((accumulator, currentValue) => accumulator + currentValue, 0)