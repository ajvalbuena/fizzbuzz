import {getDay1Challenge} from "./sum2020";

describe('firstDayChallenge', () =>{

    it("should return the multiplication of the two entries that sum to 2020", () => {

        const inputList: Array<number> = [1721, 979, 366, 299, 675, 1456];
        const expectedOutput = 514579;
        expect(getDay1Challenge(inputList)).toEqual(expectedOutput)

    });

    it("should return null if the elements do not satisfies the sum", () => {

        const inputList: Array<number> = [1721, 979, 366, 300, 675, 1456];
        expect(getDay1Challenge(inputList)).toEqual(undefined)

    });
})