import { FC } from "react";

interface Props {
  Component: FC
}

export const Behavior = ({Component}: Props) => {
  return (
    <section className="max-w-md rounded-lg border border-white p-5 text-white">
      <h1 className="text-4xl">Current status :</h1>
      <article className="flex items-center justify-center gap-x-2">
        <Component />
      </article>
    </section>
  );
};
