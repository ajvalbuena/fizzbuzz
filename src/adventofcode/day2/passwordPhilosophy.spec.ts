import {passwordPhilosophy} from "./passwordPhilosophy";

describe('secondDayChallenge - Password Philosophy - proof of concept', () => {
    it('should return 1 for one valid password in the array', ()=>  {
        const inputs : Array<string>  = ["1-3 a: abcde"]
        expect(passwordPhilosophy(inputs)).toBe(1)

    });

    it('should return 0 for none valid password in the array', ()=>  {
        const inputs : Array<string>  = ["1-3 j: abcde"]
        expect(passwordPhilosophy(inputs)).toBe(0)

    });
})