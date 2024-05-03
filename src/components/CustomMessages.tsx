import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

export const ErrorMsg = (ErrMessage: Error) => {
  let [showError, setShowError] = useState(false);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-2">
        <label className="text-center text-2xl">Unexpected behavior </label>
        <MdError className="flex h-7 w-7 animate-pulse self-end text-red-700" />
      </div>
      <div
        onClick={() => setShowError(!showError)}
        className="flex flex-col justify-center gap-y-1"
      >
        <p className="text-center cursor-pointer">Show error below </p>
        {showError && (
          <span className="text-red-500 text-opacity-55">
            {ErrMessage.message}
          </span>
        )}
      </div>
      <div className="mt-3">
        <Link
          to={"/Linkedin-Search-React/"}
          className="w-max rounded-lg bg-slate-300 px-2 py-2 text-base text-black outline-none hover:bg-slate-400 active:bg-slate-500 max-sm:text-sm"
        >
          Go back to the homepage
        </Link>
      </div>
    </>
  );
};

export const Loading = () => {
  return (
    <div className="flex gap-x-2">
      <label className="text-2xl">Loading</label>
      <FaSpinner className="flex h-7 w-7 animate-spin self-end" />
    </div>
  );
};
