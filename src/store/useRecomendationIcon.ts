import { create } from "zustand";

interface Props {
    active: boolean,
    switchActive: (val: boolean) => void;
}

export const useRecommendationIcon = create<Props>()(set => ({
    active: false,
    switchActive: (val: boolean) => set(() => ({
        active: val
    }))
}))