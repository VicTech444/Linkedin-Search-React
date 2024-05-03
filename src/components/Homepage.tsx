import { JobSearch } from "./index";
import { CiWarning } from "react-icons/ci";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { useRecommendationIcon } from "../store/index";

export const Homepage = () => {
  let { active, switchActive } = useRecommendationIcon();

  return (
    <>
      <main className="flex w-3/4 flex-col items-center justify-center gap-y-3 rounded-md border border-white bg-black p-4 text-white">
        <h1 className="mb-4 flex flex-row flex-wrap justify-center gap-x-2 text-center text-2xl">
          Linkedin Job Search{" "}
          {active ? (
            <AiFillSafetyCertificate
              className=" flex h-7 w-7 self-end text-green-700"
              onClick={() => switchActive(!active)}
              title="Open recommendations"
            />
          ) : (
            <CiWarning
              className=" flex h-7 w-7 self-end text-orange-400"
              onClick={() => switchActive(!active)}
              title="Open recommendations"
            />
          )}
        </h1>
        <section className="flex w-3/4 flex-col gap-y-3">
          <JobSearch />
        </section>
      </main>
    </>
  );
};
