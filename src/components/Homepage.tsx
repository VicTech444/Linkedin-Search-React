import { JobSearch } from "./JobSearch";

export const Homepage = () => {
  return (
      <main className="flex w-3/4 flex-col items-center justify-center gap-y-3 rounded-md border border-white bg-black p-4 text-white">
        <h1 className="text-2xl">Linkedin Job Search</h1>
        <section className="flex flex-col gap-y-3">
          <JobSearch />
        </section>
      </main>
  );
};
