export class ExpensesResult {

    operators: number[]
    expenses: number[]
    sum: number = 2020

    constructor(operators: number[], expenses: number[], sum: number) {
        this.operators = operators;
        this.expenses = expenses;
        this.sum = sum;
    }


    sumOfNElements = () => this.operators.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    private multiplicationOfNElements = () => this.operators.reduce((accumulator, currentValue) => accumulator * currentValue, 1)

    found = (): boolean => this.sumOfNElements() == this.sum;

    multiplicationOfTheElementsThatSatisfyTheSum = () => {
        let i = 0
        while (!this.found() && i <= this.expenses.length) {
            this.findingElementsToSatisfyTheSum(i);
            i++
        }
        return this.multiplicationOfNElements()
    }

    multiplicationOfThe3ElementsThatSatisfyTheSum = () => {
        let i = 0
        while (!this.found() && i <= this.expenses.length) {
            let j = i + 1
            while (!this.found() && j <= this.expenses.length) {
                this.finding3ElementsToSatisfyTheSum(i, j);
                j++
            }
            i++
        }
        return this.multiplicationOfNElements()
    }




    findingElementsToSatisfyTheSum = (i: number) => {
        this.operators = Array()
        let j = i + 1
        while (!this.found() && j <= this.expenses.length) {
            this.operators = Array(this.expenses[i], this.expenses[j])
            j++
        }
    }


    finding3ElementsToSatisfyTheSum = (i: number, j: number) => {
        this.operators = Array()
        let x = j+1
        while (!this.found() && x <= this.expenses.length) {
            this.operators = Array(this.expenses[i], this.expenses[j], this.expenses[x])
            x++
        }
    }

}