export const reportRepair = (expenses: Array<number>, sum: number): number | undefined => {
    for (let i = 0; i <= expenses.length; i++) {
        for (let j = i + 1; j <= expenses.length; j++) {
            if (satisfiesTheSum(expenses[i], expenses[j], sum)) {
                return multiplication(expenses[i], expenses[j])
            }
        }
    }
    return undefined

}

export const reportRepair3 = (expenses: Array<number>, sum: number): number | undefined => {
    for (let i = 0; i <= expenses.length; i++) {
        for (let j = i + 1; j <= expenses.length; j++) {
            for (let x = j + 1; x <= expenses.length; x++) {
                if (satisfiesTheSum3(expenses[i], expenses[j], expenses[x], sum)) {
                    return multiplication3(expenses[i], expenses[j], expenses[x])
                }
            }
        }
    }
    return undefined
}


const satisfiesTheSum = (elementOne: number, elementTwo: number, sum: number) => elementOne + elementTwo == sum
const multiplication = (elementOne: number, elementTwo: number) => elementOne * elementTwo

const satisfiesTheSum3 = (elementOne: number, elementTwo: number, elementThree: number, sum: number) => elementOne + elementTwo + elementThree == sum
const multiplication3 = (elementOne: number, elementTwo: number, elementThree: number,) => elementOne * elementTwo * elementThree


