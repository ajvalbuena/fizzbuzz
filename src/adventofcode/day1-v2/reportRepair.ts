import {ExpensesResult} from "./ExpensesResult";

function calculateResult2(i: number, sum: number, expenses: Array<number>): ExpensesResult{
    let expensesResult = new ExpensesResult(Array())
    let j = i + 1
    while (!expensesResult.found(sum) && j <= expenses.length) {
        expensesResult = new ExpensesResult(Array(expenses[i], expenses[j]))
        j++
    }
    return expensesResult;
}

function calculateResult3(i: number, j: number, sum: number, expenses: Array<number>): ExpensesResult{
    let expensesResult = new ExpensesResult(Array())
    let x = j+1
    while (!expensesResult.found(sum) && x <= expenses.length) {
        expensesResult = new ExpensesResult(Array(expenses[i], expenses[j], expenses[x]))
        x++
    }
    return expensesResult;
}

export const reportRepair = (expenses: Array<number>, sum: number): number | undefined => {
    let expensesResult = new ExpensesResult(Array())
    let i = 0
    while (!expensesResult.found(sum) && i <= expenses.length) {
        expensesResult = calculateResult2(i, sum, expenses);
        i++
    }

    return expensesResult.multiplication(expensesResult.found(sum));

}

export const reportRepair3 = (expenses: Array<number>, sum: number): number | undefined => {
    let expensesResult = new ExpensesResult(Array())
    let i = 0
    while (!expensesResult.found(sum)&& i <= expenses.length) {
        let j = i+1
        while (!expensesResult.found(sum) && j <= expenses.length) {
            expensesResult = calculateResult3(i, j, sum, expenses);
            j++
        }
        i++
    }
    return expensesResult.multiplication(expensesResult.found(sum));
}

