import axios from "axios"
import { LinkedinResponse } from "../interfaces";
import { LinkedinOptions } from "../interfaces";
import { useQuery } from "@tanstack/react-query";


export const getLinkedinInfo = async (options: LinkedinOptions): Promise<LinkedinResponse[]> => {
    let { data } = await axios.request<LinkedinResponse[]>(options);

    return data
}

export const useAPI = (options: LinkedinOptions) => {
    let linkedinQuery = useQuery({
        queryKey: ['jobs'],
        queryFn: () => getLinkedinInfo(options),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })

    return {
        linkedinQuery
    }
}