export const passwordPhilosophy = (inputs: string[]) :number => {
    return getNumberOfTimesOfTheLetter("abcde", "a" );
}


const getNumberOfTimesOfTheLetter = (password: string, letter: string): number =>{
    let numberOfTimes=0
    for(let l of password){
        if(l == letter){
            numberOfTimes+= 1
        }
    }

    if(password.startsWith(letter)){
        return 1
    }
    return numberOfTimes
}