export const getDay1Challenge = (inputs: number[]): number[] => {
    let sumIs5List: Array<number> = [];

    inputs.map((input) =>{
        for(let i=0; i<=inputs.length; i++){
            let sum = input + inputs[i];
            if(sum ==5){
                return [input, inputs[i]]
            }

        }
    })

    return sumIs5List;
}