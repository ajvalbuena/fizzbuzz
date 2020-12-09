import {passwordPhilosophy} from "./passwordPhilosophy";

describe('secondDayChallenge - Password Philosophy - proof of concept', () => {
    it('should return the number of times that the letter appears in the password', ()=>  {
        const inputs : Array<string>  = ["1-3 a: abcde"]
        expect(passwordPhilosophy(inputs)).toBe(1)

    });
})