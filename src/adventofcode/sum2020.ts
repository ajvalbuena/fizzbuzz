export const getDay1Challenge = (inputs: number[]): number[] => {
    let sumIs5List: Array<number> = [];

    inputs.map((input) =>{
        let subarray = inputs.slice(inputs.indexOf(input)+1,inputs.length-1)
        subarray.map((element) =>{
            let sum = input + element;
            if(sum ==5){
                return [input, element]
            }
        })
    })

    return sumIs5List;
}