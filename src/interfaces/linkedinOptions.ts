
export interface LinkedinOptions {
    method: 'POST',
    url: string,
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '48f083acb0msh1c2a2187bae615cp1f0dfejsn25ed4d9660c7',
      'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
    },
    data: {
      search_terms: string,
      location: string,
      page: number | string
}
}