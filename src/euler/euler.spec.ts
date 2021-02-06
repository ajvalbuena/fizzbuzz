import {euler} from "./euler";

describe("Solving Euler problem, from 0 to < N (N not included)", () => {
    const inputs = [
        {description: 'If N= 0 --> 0', lastNumber: 0, resultOfSum: 0},
        {description: 'If N= 1 --> 0', lastNumber: 1, resultOfSum: 0},
        {description: 'If N= 2 --> 0', lastNumber: 2, resultOfSum: 0},
        {description: 'If N= 3 --> 0', lastNumber: 3, resultOfSum: 0},
        {description: 'If N= 4 --> 3 --> sum=3', lastNumber: 4,  resultOfSum: 3},
        {description: 'If N= 5 --> 3 --> sum=3', lastNumber: 5,  resultOfSum: 3},
        {description: 'If N= 6 --> 3,5 --> sum=8', lastNumber: 6, resultOfSum: 8},
        {description: 'If N= 7 --> 3,5,6 --> sum=14', lastNumber: 7, resultOfSum: 14},
        {description: 'If N= 8 --> 3,5,6 --> sum=14', lastNumber: 8, resultOfSum: 14},
        {description: 'If N= 9 --> 3,5,6 --> sum=14', lastNumber: 9, resultOfSum: 14},
        {description: 'If N= 10 --> 3,5,6,9 --> sum=23', lastNumber: 10, resultOfSum: 23},
        {description: 'If N= 15 --> 3,5,6,9,10,12 --> sum=45', lastNumber: 15, resultOfSum: 45},
        {description: 'If N= 16 --> 3,5,6,9,10,12,15 --> sum=60', lastNumber: 16, resultOfSum: 60},
        {description: 'If N= 1000 --> sum=60', lastNumber: 1000, resultOfSum: 233168},

    ]

    inputs.forEach((input) => {
        it(input.description, () => {
            expect(euler(input.lastNumber)).toBe(input.resultOfSum)
        });
    })

})