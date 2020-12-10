export abstract class PasswordPolicies {
    isAValidPassword: (input: string) => boolean

    protected getElementsOfTheInputs = (input: string) => {
        const threeElements = this.separateElementsWithSeparator(input, " ")
        const conditions = this.separateElementsWithSeparator(threeElements[0], "-")
        const letter = this.separateElementsWithSeparator(threeElements[1], ":")[0]
        const password = threeElements[2]
        const condition1 = Number(conditions [0])
        const condition2 = Number(conditions[1])
        return {letter, password, min: condition1, max: condition2};
    }
    protected separateElementsWithSeparator = (input: string, separator: string): Array<string> => input.split(separator)
}


export class MinAndMaxPasswordPolicy extends PasswordPolicies {
    isAValidPassword = (input: string): boolean => {
        const {letter, password, min, max} = this.getElementsOfTheInputs(input);
        return this.isBetweenMaxAndMin(max, min, this.getNumberOfTimesTheLetterIsRepeated(password, letter))
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