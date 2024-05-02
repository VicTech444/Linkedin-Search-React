import { forwardRef } from "react"

interface Props {
    handleInputChange: () => void;
    placeholder: string;
    minLength: number;
  }
  
export const Input = forwardRef<HTMLInputElement, Props>((props, reference) => {
    let {handleInputChange, placeholder, minLength} = props;

    return (
        <input
          className="rounded-md px-1 py-2 text-base text-black outline-none w-full"
          placeholder={placeholder}
          ref={reference}
          onChange={handleInputChange}
          minLength={minLength}
        />
    )
})