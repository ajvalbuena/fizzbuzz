export const passwordPhilosophy = (inputs: string[]): number => {
    let numberOfValidPasswords = 0

    const threeElements = separateElementsWithSeparator(inputs[0], " ")
    const limits = separateElementsWithSeparator(threeElements[0], "-")
    const letter = separateElementsWithSeparator(threeElements[1], ":")[0]
    const password = threeElements[2]
    const min = Number(limits [0])
    const max = Number(limits[1])
    numberOfValidPasswords += isValidPassword(max, min, getNumberOfTimesOfTheLetter(password, letter)) ? 1 : 0
    return numberOfValidPasswords
}


const getNumberOfTimesOfTheLetter = (password: string, letter: string): number => {
    let numberOfTimes = 0
    for (let l of password) {
        if (l == letter) {
            numberOfTimes += 1
        }
    }
    return numberOfTimes
}

const isValidPassword = (max: number, min: number, numberOfTimes: number): boolean => {
    return (min <= numberOfTimes && numberOfTimes <= max)
}

const separateElementsWithSeparator = (input: string, separator: string): Array<string> => {
    return input.split(separator)
}
