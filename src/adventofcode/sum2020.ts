export const getDay1Challenge = (inputs: number[], numberOfEntries: number,  sum: number ): number | undefined => {
    let sumArray: Array<number> = [];
    if(numberOfEntries ==2){
     sumArray  = getArrayToSatisfiesTheSumOf2Elements(inputs, sum);
    }

    return multiplyArrayElements(sumArray);
}


const getArrayToSatisfiesTheSumOf2Elements = (inputs: number[], totalSum: number) => {
    let sumArray: Array<number> = [];

    inputs.forEach((number) => {
        let subarray = inputs.slice(inputs.indexOf(number) + 1, inputs.length)
        let newElement = getElementSatisfiesTheSum(number,subarray,totalSum );
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


