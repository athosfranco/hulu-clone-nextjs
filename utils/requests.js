const API_KEY = process.env.API_KEY;

const fetchRequests = {
  fetchTrending: {
    title: "Populares da Semana",
    url: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  },
  fetchTopRated: {
    title: "Bem Avaliados",
    url: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  },
  fetchActionMovies: {
    title: "Ação",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`,
  },
  fetchComedyMovies: {
    title: "Comédia",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`,
  },
  fetchHorrorMovies: {
    title: "Terror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`,
  },
  fetchMistery: {
    title: "Mistério",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=pt-BR`,
  },
  fetchSciFi: {
    title: "Ficção Científica",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=pt-BR`,
  },
  fetchWestern: {
    title: "Faroeste",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=pt-BR`,
  },
  fetchAnimation: {
    title: "Animação",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=pt-BR`,
  },
  fetchTv: {
    title: "Programas de TV",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=pt-BR`,
  },
};

export default fetchRequests;
