import {ExpensesResult} from "./ExpensesResult";


export const reportRepair = (expenses: Array<number>, sum: number): number=> {
    let expensesResult = new ExpensesResult(Array(), expenses,sum)
    return expensesResult.multiplicationOfTheElementsThatSatisfyTheSum();

}


export const reportRepair3 = (expenses: Array<number>, sum: number): number=> {
    let expensesResult = new ExpensesResult(Array(), expenses, sum)
    return expensesResult.multiplicationOfThe3ElementsThatSatisfyTheSum();
}
