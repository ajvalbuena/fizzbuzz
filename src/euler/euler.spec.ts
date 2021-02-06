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

})