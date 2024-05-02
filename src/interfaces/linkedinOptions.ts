
export interface LinkedinOptions {
    method: 'POST',
    url: string,
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '5b52da59ecmshd6cc04c77fc826ap18a006jsnfc9fccf216df',
      'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
    },
    data: {
      search_terms: string,
      location: string,
      page: '1'
}
}