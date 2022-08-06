const requests = {
    trending: `/trending/all/week?api_key=c18f3ee3879937a201e1761c73ba7940&language=en-US&append_to_response=videos`,
    netflixOriginals: `/discover/tv?api_key=c18f3ee3879937a201e1761c73ba7940&with_networks=213&append_to_response=videos`,
    topRated: `/movie/top_rated?api_key=c18f3ee3879937a201e1761c73ba7940&language=en-US&append_to_response=videos`,
    actionMovies: `/discover/movie?api_key=c18f3ee3879937a201e1761c73ba7940&with_genres=28&append_to_response=videos`,
    comedyMovies: `/discover/movie?api_key=c18f3ee3879937a201e1761c73ba7940&with_genres=35&append_to_response=videos`,
    romanceMovies: `/discover/movie?api_key=c18f3ee3879937a201e1761c73ba7940&with_genres=10749&append_to_response=videos`,
    documentaries: `/discover/movie?api_key=c18f3ee3879937a201e1761c73ba7940&with_genres=99&append_to_response=videos`,
}

export default requests