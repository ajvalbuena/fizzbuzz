export const generateFizzBuzz = (init: number, final: number): string => {

    if(init == final) {
        return init.toString()
    }
    const fizzBuzzResult = init.toString()+ '\n' + final.toString();
    return fizzBuzzResult
}