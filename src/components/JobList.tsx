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
  if (linkedinQuery.isError)
    return <Behavior Component={() => ErrorMsg(linkedinQuery.error)} />;

  return (
    <div className="flex w-full flex-col justify-center gap-y-2">
      <div className="flex w-3/4 flex-col self-center rounded-md border border-white">
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
      <div className="flex w-9/12 flex-wrap justify-between max-sm:gap-x-96 gap-y-3 self-center text-white">
        <button
          onClick={previousPage}
          className="w-max max-sm:grow rounded-lg bg-slate-200 px-2 py-2 text-center text-base text-black outline-none hover:bg-slate-300 active:bg-slate-400 "
        >
          Previous Page
        </button>
        <h1 className="w-max max-sm:grow flex self-center justify-center">Current page: {page}</h1>
        <button
          onClick={nextPage}
          className="w-max max-sm:grow rounded-lg bg-slate-200 px-2 py-2 text-center text-base text-black outline-none hover:bg-slate-300 active:bg-slate-400 "
        >
          Next Page
        </button>
      </div>
    </div>
  );
};
