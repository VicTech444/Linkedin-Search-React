import { Navigate } from "react-router";
import { setLinkOptions } from "../api/setLinkOptions";
import { useAPI } from "../hooks/useAPI";
import { useRefsValues } from "../store/useRefsValues";
import { Job } from "./Job";
import { Behavior } from "./index";
import { ErrorMsg, Loading } from "./index";

export const JobList = () => {
  let { location, job } = useRefsValues();
  
  if (!location && !job) return ( <Navigate to='/'/> );

  let options = setLinkOptions({
    search: job,
    location: location,
  });

  let { linkedinQuery } = useAPI(options);

  if (linkedinQuery.isLoading) return <Behavior Component={Loading} />;
  if (linkedinQuery.isError) return <Behavior Component={ErrorMsg} />;

  return (
    <div className="w-3/4 rounded-md border border-white">
      <section className="bg-black p-1 text-white">
        <h1 className="p-1 text-3xl">
          Jobs information {" "}
          <small className="text-sm">
            ({linkedinQuery.data?.length} jobs found)
          </small>
        </h1>
      </section>
      <section className="flex h-96 max-h-96 flex-col gap-y-2 overflow-auto bg-white p-4">
        {linkedinQuery.data?.map((jobInfo) => <Job job={jobInfo} />)}
      </section>
    </div>
  );
};
