import { RefObject } from "react";

interface Props {
    jobRef: RefObject<HTMLInputElement>;
    locationRef: RefObject<HTMLInputElement>;
}

export const validateRefs = ({ jobRef, locationRef }: Props): boolean => {
    let inputJob = jobRef.current;
    let inputLocation = locationRef.current

    if (!inputJob) return false;
    else if (!inputLocation) return false
    else if (inputJob.value.length < inputJob.minLength) return false
    else if (inputLocation.value.length < inputLocation.minLength) return false

    return true
}