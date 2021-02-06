export const euler = (lastNumber: number): number => {
    return  sumOfNElements(multiplesOf3Or5(lastNumber))
}

const sumOfNElements = (elements: number[]) => elements.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

const multiplesOf3Or5 = (lastNumber: number) => {
    let multiplesOf3or5 = Array();
    for (let i = 0; i < lastNumber; i++) {
        if (i % 3 == 0 || i%5==0) {
            multiplesOf3or5.push(i)
        }
    }
    return multiplesOf3or5;
}

