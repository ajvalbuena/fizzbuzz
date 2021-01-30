export class ExpensesResult {

    operators: number[]

    constructor(operators: number[]) {
        this.operators = operators;
    }


    sumOfNElements = () => this.operators.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    private multiplicationOfNElements = (elements: number[]) => elements.reduce((accumulator, currentValue) => accumulator * currentValue, 1)

    found = (sum: number = 2020): boolean => this.sumOfNElements() == sum;
    multiplication = (found: boolean) => found ?  this.multiplicationOfNElements(this.operators) : undefined;


    elementsThatSatisfyTheSum = (sum: number, i: number, expenses: Array<number>) => {
        while (!this.found(sum) && i <= expenses.length) {
            this.findingElementsToSatisfyTheSum(i, sum, expenses);
            i++
        }
        return new ExpensesResult(this.operators)
    }

    threeElementsThatSatisfyTheSum = (sum: number, i: number, expenses: Array<number>) => {
        while (!this.found(sum) && i <= expenses.length) {
            let j = i + 1
            while (!this.found(sum) && j <= expenses.length) {
                this.finding3ElementsToSatisfyTheSum(i, j, sum, expenses);
                j++
            }
            i++
        }
        return new ExpensesResult(this.operators)
    }




    findingElementsToSatisfyTheSum = (i: number, sum: number, expenses: Array<number>) => {
        this.operators = Array()
        let j = i + 1
        while (!this.found(sum) && j <= expenses.length) {
            this.operators = Array(expenses[i], expenses[j])
            j++
        }
    }


    finding3ElementsToSatisfyTheSum = (i: number, j: number, sum: number, expenses: Array<number>) => {
        this.operators = Array()
        let x = j+1
        while (!this.found(sum) && x <= expenses.length) {
            this.operators = Array(expenses[i], expenses[j], expenses[x])
            x++
        }
    }

}