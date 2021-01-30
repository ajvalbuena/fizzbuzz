export abstract class ExpensesResult {

    operators: number[]
    expenses: number[]
    sum: number = 2020

    constructor(operators: number[], expenses: number[], sum: number) {
        this.operators = operators;
        this.expenses = expenses;
        this.sum = sum;
    }


    sumOfNElements = () => this.operators.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    multiplicationOfNElements = () => this.operators.reduce((accumulator, currentValue) => accumulator * currentValue, 1)

    found = (): boolean => this.sumOfNElements() == this.sum;

    abstract multiplicationOfTheElementsThatSatisfyTheSum(): number;

}


export class ExpensesResult2Elements extends ExpensesResult {
    multiplicationOfTheElementsThatSatisfyTheSum = () => {
        let i = 0
        while (!this.found() && i <= this.expenses.length) {
            this.elementsThatSatisfyTheSum(i);
            i++
        }
        return this.multiplicationOfNElements()

    }

    private elementsThatSatisfyTheSum = (i: number) => {
        this.operators = Array()
        let j = i + 1
        while (!this.found() && j <= this.expenses.length) {
            this.operators = Array(this.expenses[i], this.expenses[j])
            j++
        }
    }
}


export class ExpensesResult3Elements extends ExpensesResult {
    multiplicationOfTheElementsThatSatisfyTheSum = (): number => {
        let i = 0
        while (!this.found() && i <= this.expenses.length) {
            let j = i + 1
            while (!this.found() && j <= this.expenses.length) {
                this.elementsThatSatisfyTheSum(i, j);
                j++
            }
            i++
        }
        return this.multiplicationOfNElements()
    }

    private elementsThatSatisfyTheSum = (i: number, j: number): void => {
        this.operators = Array()
        let x = j + 1
        while (!this.found() && x <= this.expenses.length) {
            this.operators = Array(this.expenses[i], this.expenses[j], this.expenses[x])
            x++
        }
    }


}