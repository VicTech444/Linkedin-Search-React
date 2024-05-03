import { Navigate } from "react-router";
import { setLinkOptions } from "../api/setLinkOptions";
import { useAPI } from "../hooks/useAPI";
import { useRefsValues } from "../store/index";
import { Job } from "./index";
import { Behavior } from "./index";
import { ErrorMsg, Loading } from "./index";

export const JobList = () => {
  let { location, job } = useRefsValues();

  if (!location && !job) return <Navigate to="/Linkedin-Search-React/" />;

  let options = setLinkOptions({
    search: job,
    location: location,
  });

  let { linkedinQuery, page, previousPage, nextPage } = useAPI(options);

  if (linkedinQuery.isLoading || linkedinQuery.isFetching)
    return <Behavior Component={Loading} />;
  if (
    linkedinQuery.isError ||
    !linkedinQuery.data?.length ||
    typeof linkedinQuery.data === "string"
  )
    return <Behavior Component={ErrorMsg} />;

  return (
    <div className="flex flex-col gap-y-2 justify-center w-full">
      <div className="w-3/4 rounded-md border border-white flex flex-col self-center">
        <section className="bg-black p-1 text-white">
          <h1 className="p-1 text-3xl">
            Jobs information{" "}
            <small className="text-sm">
              ({linkedinQuery.data?.length} jobs found)
            </small>
          </h1>
        </section>
        <section className="flex h-96 max-h-96 flex-col gap-y-2 overflow-auto bg-white p-4">
          {linkedinQuery.data?.map((jobInfo) => (
            <Job job={jobInfo} key={jobInfo.job_url} />
          ))}
        </section>
      </div>
      <div className="flex text-white w-9/12 self-center justify-between">
        <button
          onClick={previousPage}
          className="rounded-lg bg-slate-200 px-2 py-2 text-center text-base text-black outline-none hover:bg-slate-300 active:bg-slate-400"
        >
          Previous Page
        </button>
        <h1>Current page: {page}</h1>
        <button
          onClick={nextPage}
          className="rounded-lg bg-slate-200 px-2 py-2 text-center text-base text-black outline-none hover:bg-slate-300 active:bg-slate-400"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};
