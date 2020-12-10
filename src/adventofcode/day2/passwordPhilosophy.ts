export const passwordPhilosophy = (inputs: string[]): number => {
    let numberOfValidPasswords = 0
    inputs.forEach((input) =>{
        numberOfValidPasswords +=  isAValidPassword(input) ? 1 : 0
    })
    return numberOfValidPasswords
}

 const isAValidPassword = (input: string ): boolean => {
     const {letter, password, min, max} = getElementsOfTheInputs(input);
     return isBetweenMaxAndMin(max, min, getNumberOfTimesTheLetterIsRepeated(password, letter))
}

const getNumberOfTimesTheLetterIsRepeated = (password: string, letter: string): number => {
    let numberOfTimes = 0
    for (let l of password) {
        if (l == letter) {
            numberOfTimes += 1
        }
    }
    return numberOfTimes
}

const isBetweenMaxAndMin = (max: number, min: number, numberOfTimes: number): boolean => (min <= numberOfTimes) && (numberOfTimes <= max)

const separateElementsWithSeparator = (input: string, separator: string): Array<string> =>  input.split(separator)

const getElementsOfTheInputs = (input: string) => {
    const threeElements = separateElementsWithSeparator(input, " ")
    const limits = separateElementsWithSeparator(threeElements[0], "-")
    const letter = separateElementsWithSeparator(threeElements[1], ":")[0]
    const password = threeElements[2]
    const min = Number(limits [0])
    const max = Number(limits[1])
    return {letter, password, min, max};
}