export abstract class PasswordPolicies {
    abstract isAValidPassword: (input: string) => boolean

    protected getElementsOfTheInputs = (input: string) => {
        const threeElements = this.separateElementsWithSeparator(input, " ")
        const conditions = this.separateElementsWithSeparator(threeElements[0], "-")
        const letter = this.separateElementsWithSeparator(threeElements[1], ":")[0]
        const password = threeElements[2]
        const number1 = Number(conditions [0])
        const number2 = Number(conditions[1])
        return {letter, password, number1, number2};
    }
    protected separateElementsWithSeparator = (input: string, separator: string): Array<string> => input.split(separator)
}


export class MinAndMaxPasswordPolicy extends PasswordPolicies {
    isAValidPassword = (input: string): boolean => {
        const {letter, password, number1, number2} = this.getElementsOfTheInputs(input);
        return this.isBetweenMaxAndMin(number2, number1, this.getNumberOfTimesTheLetterIsRepeated(password, letter))
    }

    getNumberOfTimesTheLetterIsRepeated = (password: string, letter: string): number => {
        let numberOfTimes = 0
        for (let l of password) {
            if (l == letter) {
                numberOfTimes += 1
            }
        }
        return numberOfTimes
    }

   isBetweenMaxAndMin = (max: number, min: number, numberOfTimes: number): boolean => (min <= numberOfTimes) && (numberOfTimes <= max)
}




export class PositionsPasswordPolicy extends PasswordPolicies {
    isAValidPassword = (input: string): boolean => {
        const {letter, password, number1, number2} = this.getElementsOfTheInputs(input);
        let numberOfMatches = this.numberOfMatches(letter, password, number1, number2);
        return numberOfMatches ==1
    }

    letterIsInThisPosition = (letter: string, password:string, index: number): boolean =>{
        return password.charAt(index) == letter
    }

    numberOfMatches = (letter: string, password: string, number1: number, number2: number): number => {
        const positions: Array<number> = [number1-1, number2-1]
        let numberOfMatching = 0

        positions.forEach((index)=>{
            if(this.letterIsInThisPosition(letter,password,index)){
                numberOfMatching += 1
            }
        })

        return numberOfMatching;
    }
}