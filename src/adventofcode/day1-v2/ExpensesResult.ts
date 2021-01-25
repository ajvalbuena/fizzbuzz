export class ExpensesResult {

    operators: number[]

    constructor(operators: number[]) {
        this.operators = operators;
    }


   public sumOfNElements = () => this.operators.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
   private multiplicationOfNElements = (elements: number[]) => elements.reduce((accumulator, currentValue) => accumulator * currentValue, 1)

   multiplication(found: boolean) {
        let result = undefined
        if (found) {
            result = this.multiplicationOfNElements(this.operators)
        }
        return result;
    }


    found= (sum: number = 2020): boolean => this.sumOfNElements() == sum;


}