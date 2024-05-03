import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { validateRef, invalidRefMsg } from "../helper/validateRefs";
import { useRefsValues } from "../store/index";
import { useRecommendationIcon } from "../store/index";
import { Input } from "./index";

export const JobSearch = () => {
  let jobRef = useRef<HTMLInputElement>(null);
  let locationRef = useRef<HTMLInputElement>(null);
  let [validate, setValidate] = useState<string | boolean>(false);
  let { active, switchActive } = useRecommendationIcon();

  let { setRefVals } = useRefsValues();

  const handleInputsChange = async () => {
    let jobIsValid = validateRef(jobRef);
    let locationIsValid = validateRef(locationRef);

    setValidate(jobIsValid && locationIsValid);

    setRefVals({
      job: jobRef.current?.value!,
      location: locationRef.current?.value!,
    });
  };

  const handleButtonClick = () => {
    if (active) return;

    let jobIsValid = validateRef(jobRef);
    let locationIsValid = validateRef(locationRef);

    if (!jobIsValid || !locationIsValid) {
      switchActive(true);

      setTimeout(() => switchActive(false), 3000);
    }
  };

  let redirect = validate
    ? "/Linkedin-Search-React/jobs"
    : "/Linkedin-Search-React/";

  return (
    <>
      <article className="flex flex-wrap justify-center gap-x-3 gap-y-5">
        <Input
          ref={jobRef}
          handleInputChange={handleInputsChange}
          placeholder="Enter the job name"
          minLength={1}
          helperMsg={invalidRefMsg(jobRef)}
        />
        <Input
          ref={locationRef}
          handleInputChange={handleInputsChange}
          placeholder="Location (eg: Peru)"
          minLength={2}
          helperMsg={invalidRefMsg(locationRef)}
        />
      </article>
      <article className="flex items-center justify-center">
        <Link
          to={redirect}
          className="rounded-lg bg-slate-200 px-2 py-2 text-center text-base text-black outline-none hover:bg-slate-300 active:bg-slate-400"
          onClick={handleButtonClick}
        >
          Start Searching
        </Link>
      </article>
    </>
  );
};
