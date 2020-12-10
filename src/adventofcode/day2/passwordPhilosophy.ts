import {PasswordPolicies} from "./PasswordPolicies";

export const passwordPhilosophy = (inputs: string[], passwordPolicy: PasswordPolicies): number => {
    let numberOfValidPasswords = 0
    inputs.forEach((input) =>{
        numberOfValidPasswords +=  passwordPolicy.isAValidPassword(input) ? 1 : 0
    })
    return numberOfValidPasswords
}