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
          'X-RapidAPI-Key': '48f083acb0msh1c2a2187bae615cp1f0dfejsn25ed4d9660c7',
          'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
        },
        data: {
          search_terms: search,
          location: location,
          page: '1'
        }
      };
}