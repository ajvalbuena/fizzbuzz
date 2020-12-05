import {getDay1Challenge} from "./sum2020";

describe('firstDayChallenge', () =>{

    it("should find the two entries that sum to 5", () => {

        const inputList: Array<number> = [1,2,3];
        const expectedOutput = [2,3];
        expect(getDay1Challenge(inputList)).toEqual((expectedOutput))

    });
})