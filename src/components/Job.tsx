import { Link } from "react-router-dom";
import { FC } from "react";
import { LinkedinResponse } from "../interfaces";

interface Props {
  job: LinkedinResponse;
}

export const Job: FC<Props> = ({ job }) => {
  return (
    <article className="flex flex-col gap-y-2 rounded-md border border-gray-400 border-opacity-60 p-3">
      <h1 className="text-lg font-bold">{job.job_title} </h1>
      <section>
        <h4 className="font-semibold">Company name: <span className="font-normal">{job.company_name}</span></h4>
        <h4 className="font-semibold">Location: <span className="font-normal">{job.job_location}</span></h4>
        <h4 className="font-semibold">Posted at: <span className="font-normal">{job.posted_date}</span></h4>
      </section>
      <Link
        to={job.job_url}
        className="rounded-lg bg-slate-300 px-2 py-2 text-base text-black outline-none w-max hover:bg-slate-400 active:bg-slate-500"
      >
        Go to this post
      </Link>
    </article>
  );
};
