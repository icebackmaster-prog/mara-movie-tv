import axios from 'axios';

const OMDB_API_KEY = process.env.OMDB_API_KEY;
const BASE_URL = process.env.OMDB_BASE_URL || 'https://www.omdbapi.com';

export const omdbApi = axios.create({
  baseURL: BASE_URL,
});

export const searchByTitle = async (title: string) => {
  const { data } = await omdbApi.get('', {
    params: {
      apikey: OMDB_API_KEY,
      s: title,
    },
  });
  return data.Search || [];
};

export const getByIMDBId = async (imdbId: string) => {
  const { data } = await omdbApi.get('', {
    params: {
      apikey: OMDB_API_KEY,
      i: imdbId,
      plot: 'full',
    },
  });
  return data;
};
