import {ExpensesResult2Elements, ExpensesResult3Elements} from "./ExpensesResult";


export const reportRepair = (expenses: Array<number>, sum: number): number=> {
    let expensesResult = new ExpensesResult2Elements(expenses,sum)
    return expensesResult.multiplicationOfTheElementsThatSatisfyTheSum();

}


export const reportRepair3 = (expenses: Array<number>, sum: number): number=> {
    let expensesResult = new ExpensesResult3Elements(expenses, sum)
    return expensesResult.multiplicationOfTheElementsThatSatisfyTheSum();
}
