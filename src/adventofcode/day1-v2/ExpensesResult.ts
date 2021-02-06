export abstract class ExpensesResult {

    expenses: number[]
    sum: number = 2020

    constructor( expenses: number[], sum: number) {
        this.expenses = expenses;
        this.sum = sum;
    }


    sumOfNElements = (elements: number[]) => elements.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    multiplicationOfNElements = (elements: number[]) => elements.reduce((accumulator, currentValue) => accumulator * currentValue, 1)

    found = (elements: number[]): boolean => this.sumOfNElements(elements) == this.sum;

    abstract multiplicationOfTheElementsThatSatisfyTheSum(): number;

}


export class ExpensesResult2Elements extends ExpensesResult {
    multiplicationOfTheElementsThatSatisfyTheSum = () => {
        let operators = Array();
        let i = 0
        while (!this.found(operators) && i <= this.expenses.length) {
            operators = this.elementsThatSatisfyTheSum(i);
            i++
        }
        return this.multiplicationOfNElements(operators)

    }

    private elementsThatSatisfyTheSum = (i: number): number[]=> {
        let operators = Array();
        let j = i + 1
        while (!this.found(operators) && j <= this.expenses.length) {
            operators = Array(this.expenses[i], this.expenses[j])
            j++
        }
        return operators;
    }
}


export class ExpensesResult3Elements extends ExpensesResult {
    multiplicationOfTheElementsThatSatisfyTheSum = (): number => {
        let operators = Array();
        let i = 0
        while (!this.found(operators) && i <= this.expenses.length) {
            let j = i + 1
            while (!this.found(operators) && j <= this.expenses.length) {
                operators = this.elementsThatSatisfyTheSum(i, j);
                j++
            }
            i++
        }
        return this.multiplicationOfNElements(operators)
    }

    private elementsThatSatisfyTheSum = ( i: number, j: number): number[] => {
        let operators = Array();
        let x = j + 1
        while (!this.found(operators) && x <= this.expenses.length) {
            operators = Array(this.expenses[i], this.expenses[j], this.expenses[x])
            x++
        }
        return operators;
    }


}