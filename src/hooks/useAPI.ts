import axios from "axios"
import { LinkedinResponse } from "../interfaces";
import { LinkedinOptions } from "../interfaces";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const getLinkedinInfo = async (options: LinkedinOptions): Promise<LinkedinResponse[]> => {
    let { data } = await axios.request<LinkedinResponse[]>(options);

    if (data.length === 0) throw new Error('Jobs not founded');
    else if (!Array.isArray(data)) throw new Error('Requested info is not available');
    else if (typeof data === 'string') throw new Error(`API has exceeded it's calls`)

    return data
}

export const useAPI = (options: LinkedinOptions) => {
    let [page, setPage] = useState(1);
    let { data } = options;
    data.page = page;

    let linkedinQuery = useQuery({
        queryKey: ['jobs', `${data.search_terms}`, `${data.location}`, `page: ${page}`],
        queryFn: () => getLinkedinInfo(options),
        staleTime: 1000 * 60 * 20,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })

    const nextPage = () => {
        if (linkedinQuery.data?.length === 0) return;

        scrollTo({
            top: 0
        });
        setPage(page + 1)
    }

    const previousPage = () => {
        if (linkedinQuery.data?.length === 0 || page === 1) return;

        scrollTo({
            top: 0
        })
        
        setPage(page - 1)
    }

    console.log(linkedinQuery);

    return {
        // Props
        linkedinQuery,

        // Get
        page,

        // Methods
        nextPage,
        previousPage
    }
}