import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useRefsValues } from "../store/useRefsValues";
import { validateRefs } from "../helper/validateRefs";
import { Input } from "./index";

export const JobSearch = () => {
  let jobRef = useRef<HTMLInputElement>(null);
  let locationRef = useRef<HTMLInputElement>(null);
  let [validate, setValidate] = useState(false);

  let { setRefVals } = useRefsValues();

  const handleInputsChange = async () => {
    setValidate(validateRefs({ jobRef, locationRef }));

    setRefVals({
      job: jobRef.current?.value!,
      location: locationRef.current?.value!,
    });
  };

  return (
    <>
      <article className="flex gap-x-2">
        <Input
          ref={jobRef}
          handleInputChange={handleInputsChange}
          placeholder="Enter the job name"
          minLength={6}
        />
        <Input
          ref={locationRef}
          handleInputChange={handleInputsChange}
          placeholder="Enter the job location"
          minLength={2}
        />
      </article>
      <article className="flex items-center justify-center">
        <Link
          to={validate ? "/Linkedin-Search-React/jobs" : "/Linkedin-Search-React/"}
          className="rounded-lg bg-slate-200 px-2 py-2 text-base text-black outline-none hover:bg-slate-300 active:bg-slate-400"
        >
          Start searching
        </Link>
      </article>
    </>
  );
};
