import {getDay1Challenge} from "./sum2020";

describe('firstDayChallenge', () =>{

    it("should find the two entries that sum to 2020", () => {

        const inputList: Array<number> = [1721, 979, 366, 299, 675, 1456];
        const expectedOutput = [1721,299];
        expect(getDay1Challenge(inputList)).toEqual(expectedOutput)

    });
})