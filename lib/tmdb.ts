import axios from 'axios';

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3';

export const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
    language: 'en-US',
  },
});

export const fetchTrending = async (mediaType: 'movie' | 'tv', timeWindow: 'day' | 'week' = 'week') => {
  const { data } = await tmdbApi.get(`/trending/${mediaType}/${timeWindow}`);
  return data.results;
};

export const fetchPopularMovies = async () => {
  const { data } = await tmdbApi.get('/movie/popular');
  return data.results;
};

export const fetchMovieDetails = async (id: number) => {
  const { data } = await tmdbApi.get(`/movie/${id}`, {
    params: { append_to_response: 'videos,credits,similar' },
  });
  return data;
};

export const searchTMDB = async (query: string) => {
  const { data } = await tmdbApi.get('/search/multi', {
    params: { query },
  });
  return data.results;
};
