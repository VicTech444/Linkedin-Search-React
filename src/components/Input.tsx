import { forwardRef } from "react";
import { useRecommendationIcon } from "../store/index";

interface Props {
  handleInputChange: () => void;
  placeholder: string;
  minLength?: number;
  helperMsg: string;
}

export const Input = forwardRef<HTMLInputElement, Props>((props, reference) => {
  let { handleInputChange, placeholder, minLength, helperMsg } = props;
  let { active } = useRecommendationIcon();

  return (
    <div className="flex w-32 grow flex-col">
      <input
        className={`w-full rounded-md px-1 py-2 text-base text-black outline-none ${active ? "placeholder:text-red-500 placeholder:text-opacity-70" : ""}`}
        placeholder={placeholder}
        ref={reference}
        onChange={handleInputChange}
        minLength={minLength}
      />
      {active && <div className="flex text-pretty text-xs ">{helperMsg}</div>}
    </div>
  );
});
