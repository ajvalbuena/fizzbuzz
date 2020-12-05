export const getDay1Challenge = (inputs: number[], numberOfEntries: number, sum: number): number | undefined => {
    let sumArray: Array<number> = [];
    if (numberOfEntries == 2) {
        sumArray = getArrayToSatisfiesTheSumOf2Elements(inputs, sum);
    } else if (numberOfEntries == 3) {
        sumArray = getArrayToSatisfiesTheSumOf3Elements(inputs, sum);
    }

    return multiplyArrayElements(sumArray);
}


const getArrayToSatisfiesTheSumOf2Elements = (inputs: number[], totalSum: number) => {
    let sumArray: Array<number> = [];

    inputs.forEach((number) => {
        let subarray = inputs.slice(inputs.indexOf(number) + 1, inputs.length)
        let mainArray: Array<number> = [number]
        let newElement = getElementSatisfiesTheSum(mainArray, subarray, totalSum);
        if (newElement.length ==2 ) {
            sumArray = newElement
        }
    })

    return sumArray;
}

const getArrayToSatisfiesTheSumOf3Elements = (inputs: number[], totalSum: number) => {
    let sumArray: Array<number> = [];

    inputs.forEach((number) => {
        let subarray = inputs.slice(inputs.indexOf(number) + 1, inputs.length)

        subarray.forEach((nextNumber) => {
            let subsubarray = subarray.slice(subarray.indexOf(nextNumber) + 1, inputs.length)
            let mainArray: Array<number> = [number, nextNumber]
            let newElement = getElementSatisfiesTheSum(mainArray, subsubarray, totalSum);
            if (newElement.length ==3) {
                sumArray = newElement;
            }

        })
    })
    return sumArray;
}

const getElementSatisfiesTheSum = (initialElementsArray: Array<number>, subArray: Array<number>, sumResult: number)=> {
    const initialSum = sumArrayElements(initialElementsArray)
    subArray.forEach((nextNumber) => {
        let sum = initialSum + nextNumber;
        if (sum == sumResult) {
            initialElementsArray.push(nextNumber);
        }
    })
    return initialElementsArray;
}








const multiplyArrayElements = (inputs: Array<number>): number | undefined => {
    if (inputs.length == 0) {
        return undefined
    }

    let arrayMultiplication: number = 1;
    inputs.map((number) => {
        arrayMultiplication *= number;
    })
    return arrayMultiplication;
}

const sumArrayElements = (inputs: Array<number>): number => {
    if (inputs.length == 0) {
        return 0
    }

    let totalSum: number = 0;
    inputs.map((number) => {
        totalSum += number;
    })
    return totalSum;
}




