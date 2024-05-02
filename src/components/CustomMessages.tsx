import { FaSpinner } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

export const ErrorMsg = () => {
  return (
    <>
      <div className="flex gap-x-2 flex-wrap justify-center">
      <label className="text-2xl text-center">Unexpected behavior </label>
      <MdError className="flex h-7 w-7 animate-pulse self-end text-red-700" />
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
