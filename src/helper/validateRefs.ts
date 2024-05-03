import { RefObject } from "react";

type Props = RefObject<HTMLInputElement>;

export const validateRef = (refToValidate : Props): boolean => {

    let input = refToValidate.current;

    if (!input) return false
    else if (input.value.length < input.minLength) return false

    return true
}

export const invalidRefMsg = (refToValidate : Props): string => {

    let input = refToValidate.current;

    if (!input) return 'Input doesnt exist'
    else if (input.value.length < input.minLength) return `The min characters must be ${input.minLength}`

    return `Everything's fine`;
}