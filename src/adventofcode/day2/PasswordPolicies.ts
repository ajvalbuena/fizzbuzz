export abstract class PasswordPolicies {
    isAValidPassword: (input: string) => boolean

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
        let numberOfMatching = 0
        if(this.letterIsInThisPosition(letter, password, number1)){
            numberOfMatching+=1
        }
        if(this.letterIsInThisPosition(letter, password, number2)){
            numberOfMatching+=1
        }
        return numberOfMatching ==1
    }

    letterIsInThisPosition = (letter: string, password:string, position: number): boolean =>{
        const index: number = position-1
        return password.charAt(index) == letter
    }
}