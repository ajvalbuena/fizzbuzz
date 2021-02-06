import {euler} from "./euler";

describe("Solving Euler problem, from 0 to < N (N not included)", () => {
    const inputsWithResult0 = [
        {description: 'If N= 0 --> 0', lastNumber: 0},
        {description: 'If N= 1 --> 0', lastNumber: 1},
        {description: 'If N= 2 --> 0', lastNumber: 2},
        {description: 'If N= 3 --> 0', lastNumber: 3}
    ]

    inputsWithResult0.forEach((input) => {
        it(input.description, () => {
            const sumResult = 0
            expect(euler(input.lastNumber)).toBe(sumResult)
        });
    })

    const inputsWithResult3 = [
        {description: 'If N= 4 --> 3 --> sum=3', lastNumber: 4},
        {description: 'If N= 5 --> 3 --> sum=3', lastNumber: 5},
    ]

    inputsWithResult3.forEach((input) => {
        it(input.description, () => {
            const sumResult = 3
            expect(euler(input.lastNumber)).toBe(sumResult)
        });
    })

    it('If N= 6 --> 3,5 --> sum= 8 ', () => {
        const sumResult = 8
        expect(euler(6)).toBe(sumResult)
    });

    const inputsWithResult14 = [
        {description: 'If N= 7 --> 3,5,6 --> sum=14', lastNumber: 7},
        {description: 'If N= 8 --> 3,5,6 --> sum=14', lastNumber: 8},
        {description: 'If N= 9 --> 3,5,6 --> sum=14', lastNumber: 9},
    ]

    inputsWithResult14.forEach((input) => {
        it(input.description, () => {
            const sumResult = 14
            expect(euler(input.lastNumber)).toBe(sumResult)
        });
    })


})