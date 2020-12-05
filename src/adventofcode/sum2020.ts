export const getDay1Challenge = (inputs: number[]): number | undefined => {
    const sumArray: Array<number> = getArrayToSatisfiesTheSum(inputs, 2020);

    return multiplyArrayElements(sumArray);
}


const getArrayToSatisfiesTheSum = (inputs: number[], totalSum: number) => {
    let sumArray: Array<number> = [];
    let newElement = null;

    inputs.map((number) => {
        let subarray = inputs.slice(inputs.indexOf(number) + 1, inputs.length)
        newElement = getElementSatisfiesTheSum(number,subarray,totalSum );
        if(newElement){
            sumArray = [number,newElement]
        }
    })

    return sumArray;
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

const getElementSatisfiesTheSum = (initialElement: number, subarray: Array<number>, sumResult: number): number | null=>{
    let newElementOfTheList = null;
    subarray.forEach((nextNumber) => {
       let sum = initialElement + nextNumber;
        if (sum == sumResult) {
            newElementOfTheList = nextNumber;
        }
    })
    return newElementOfTheList;
}


