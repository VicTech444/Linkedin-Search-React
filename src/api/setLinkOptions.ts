import { LinkedinOptions } from "../interfaces";

interface Props {
    search: string;
    location: string
}

export const setLinkOptions = ({search, location}: Props): LinkedinOptions => {
    return {
        method: 'POST',
        url: 'https://linkedin-jobs-search.p.rapidapi.com/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '5b52da59ecmshd6cc04c77fc826ap18a006jsnfc9fccf216df',
          'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
        },
        data: {
          search_terms: search,
          location: location,
          page: '1'
        }
      };
}