import {passwordPhilosophy} from "./passwordPhilosophy";

describe('secondDayChallenge - Password Philosophy - proof of concept', () => {
    it('should return an string ', ()=>  {
        const inputs = "1-3 a: abcde"
        expect(passwordPhilosophy(inputs)).toBe(true)

    });
})