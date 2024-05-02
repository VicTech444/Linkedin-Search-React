import { create } from "zustand";

interface Props {
    job: string;
    location: string;
    setRefVals: ({ job, location }: { job: string, location: string}) => void;
}

export const useRefsValues = create<Props>()((set) => ({
    job: '',
    location: '',
    setRefVals: ({ job, location }) => set((state) => ({
        ...state,
        job: job,
        location: location
    })),
}))