export const getDay1Challenge = (inputs: number[]): number | undefined => {
    const sumArray: Array<number> = getArrayToSatisfiesTheSum(inputs, 2020);

    return multiplyArrayElements(sumArray);
}


function getArrayToSatisfiesTheSum(inputs: number[], totalSum: number) {
    let sumArray: Array<number> = [];

    inputs.map((number) => {
        let subarray = inputs.slice(inputs.indexOf(number) + 1, inputs.length)
        subarray.map((nextNumber) => {
            let sum = number + nextNumber;
            if (sum == totalSum) {
                sumArray = [number, nextNumber]
            }
        })
    })

    return sumArray;
}

function multiplyArrayElements(inputs: Array<number>): number | undefined {
    if (inputs.length == 0) {
        return undefined
    }

    let arrayMultiplication: number = 1;
    inputs.map((number) => {
        arrayMultiplication *= number;
    })
    return arrayMultiplication;
}
