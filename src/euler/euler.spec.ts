import {euler} from "./euler";

describe("Solving Euler problem, from 0 to < N (N not included)", () =>{
    it("If N= 0 --> 0", () => {
        const sumResult = 0
        expect(euler()).toBe(sumResult)
    });
})