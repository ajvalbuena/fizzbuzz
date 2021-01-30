import {ExpensesResult} from "./ExpensesResult";


export const reportRepair = (expenses: Array<number>, sum: number): number | undefined => {
    let expensesResult = new ExpensesResult(Array())
    let i = 0
    expensesResult = expensesResult.elementsThatSatisfyTheSum(sum, i, expenses);
    return expensesResult.multiplication(expensesResult.found(sum));

}


export const reportRepair3 = (expenses: Array<number>, sum: number): number | undefined => {
    let expensesResult = new ExpensesResult(Array())
    let i = 0
    expensesResult = expensesResult.threeElementsThatSatisfyTheSum( sum, i, expenses);
    return expensesResult.multiplication(expensesResult.found(sum));
}
