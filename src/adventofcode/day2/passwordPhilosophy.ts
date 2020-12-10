export const passwordPhilosophy = (inputs: string[]): number => {
    let numberOfValidPasswords = 0
    const {letter, password, min, max} = getElementsOfTheInputs(inputs);
    numberOfValidPasswords += isaValidPassword(max, min, getNumberOfTimesTheLetterIsRepeated(password, letter)) ? 1 : 0
    return numberOfValidPasswords
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

const isaValidPassword = (max: number, min: number, numberOfTimes: number): boolean => (min <= numberOfTimes) && (numberOfTimes <= max)

const separateElementsWithSeparator = (input: string, separator: string): Array<string> =>  input.split(separator)

function getElementsOfTheInputs(inputs: string[]) {
    const threeElements = separateElementsWithSeparator(inputs[0], " ")
    const limits = separateElementsWithSeparator(threeElements[0], "-")
    const letter = separateElementsWithSeparator(threeElements[1], ":")[0]
    const password = threeElements[2]
    const min = Number(limits [0])
    const max = Number(limits[1])
    return {letter, password, min, max};
}