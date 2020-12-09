export const passwordPhilosophy = (inputs: string[]) :boolean => {
    return isValidPassword(3,1, getNumberOfTimesOfTheLetter("abcde", "a" ));
}


const getNumberOfTimesOfTheLetter = (password: string, letter: string): number =>{
    let numberOfTimes=0
    for(let l of password){
        if(l == letter){
            numberOfTimes+= 1
        }
    }
    return numberOfTimes
}

const isValidPassword = (max: number, min: number, numberOfTimes: number): boolean => {
    return (min<= numberOfTimes && numberOfTimes <= max)
}