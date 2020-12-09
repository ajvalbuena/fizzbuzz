import {passwordPhilosophy} from "./passwordPhilosophy";

describe('secondDayChallenge - Password Philosophy - proof of concept', () => {
    it('should return true for this letter and password', ()=>  {
        const inputs : Array<string>  = ["1-3 a: abcde"]
        expect(passwordPhilosophy(inputs)).toBe(true)

    });
})